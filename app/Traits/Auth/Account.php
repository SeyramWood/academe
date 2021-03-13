<?php

namespace App\Traits\Auth;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\StatefulGuard;

/**
 * CreateAccount
 */
trait Account
{
  use RedirectsUsers;

  public function register($request)
  {
    if ($request->accountType === 'student') {
      $request->validate([
        'student_id' => 'required|unique:users',
        'password' => 'required|string|confirmed',
        'email' => 'required|email|max:255|unique:users',
      ]);
      $user = User::create([
        'student_id' => $request->student_id,
        'password' => Hash::make($request->password),
        'email' => $request->email,
      ]);
      Auth::login($user);
    }

    if ($request->accountType === 'faculty') {

      $request->validate([
        'faculty_id' => 'required|unique:lecturers',
        'password' => 'required|string|confirmed',
        'email' => 'required|email|max:255|unique:lecturers',
      ]);

      $user = Lecturer::create([
        'faculty_id' => $request->faculty_id,
        'password' => Hash::make($request->password),
        'email' => $request->email,
      ]);
      Auth::guard(Lecturer::Guard)->login($user);
    }



    if ($response = $this->registered($request, $user)) {
      return $response;
    }
  }
  /**
   * The user has been registered.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  mixed  $user
   * @return mixed
   */
  protected function registered(Request $request, $user)
  {
    if (Auth::guard(Lecturer::Guard)->check()) {
      return redirect(RouteServiceProvider::FACULTY);
    } else {
      return redirect(RouteServiceProvider::STUDENT);
    }
  }


  public function login($request)
  {
    $request->validate([
      'userId' => 'required',
      'password' => 'required|string',
    ]);

    $credentials = $this->credentials($request);

    if ($request->userType === 'student') {
      if (Auth::attempt($credentials, true)) {
        $request->session()->regenerate();
        return redirect()->intended(RouteServiceProvider::STUDENT);
      }
    }
    if ($request->userType === 'faculty') {
      if (Auth::guard(Lecturer::Guard)->attempt($credentials, true)) {
        $request->session()->regenerate();
        return redirect()->intended(RouteServiceProvider::FACULTY);
      }
    }

    return back()->withErrors([
      'userId' => 'The provided credentials do not match our records.',
    ]);
  }


  public function logout($request)
  {
    if (Auth::guard(Lecturer::Guard)->check()) {
      Auth::guard(Lecturer::Guard)->logout();
    } else {
      Auth::logout();
    }
    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect(route('account'));
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function credentials($request)
  {
    switch ($request->userType) {
      case 'faculty':
        return [
          'faculty_id' => $request->userId,
          'password' => $request->password
        ];
      default:
        return [
          'student_id' => $request->userId,
          'password' => $request->password
        ];
    }
  }
}
