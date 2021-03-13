<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Lecturer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

/**
 * Manage Profile
 */
trait ManageProfile
{
  public function updateProfile($request)
  {
    $request->validate([
      'surname' => "required|string",
      'middleName' => "required|string",
      'otherName' => "nullable|string",
      'phone' => "nullable|string",
      'gender' => "required|string"
    ]);

    if (Auth::guard(Lecturer::Guard)->check()) {
      Lecturer::where('id', Auth::guard(Lecturer::Guard)->id())->update([
        'surname' => $request->surname,
        'middle_name' => $request->middleName,
        'other_name' => $request->otherName,
        'phone' => $request->phone,
        'gender' => $request->gender
      ]);
      return redirect(route('faculty.profile'));
    } else {
      User::where('id', Auth::id())->update([
        'surname' => $request->surname,
        'middle_name' => $request->middleName,
        'other_name' => $request->otherName,
        'phone' => $request->phone,
        'gender' => $request->gender
      ]);
      return redirect(route('student.profile'));
    }
  }
  public function updateProfilePhoto($request)
  {
    $request->validate([
      'profilePhoto' => "required|file|mimes:png,jpg,jpeg",
    ]);
    if (Auth::guard(Lecturer::Guard)->check()) {
      Lecturer::where('id', Auth::guard(Lecturer::Guard)->id())->update([
        'avatar' => $this->processAvatar($request),
      ]);
      return redirect(route('faculty.profile'));
    } else {
      User::where('id', Auth::id())->update([
        'avatar' => $this->processAvatar($request),
      ]);
      return redirect(route('student.profile'));
    }
  }

  protected function processAvatar($request)
  {
    if (Auth::guard(Lecturer::Guard)->check()) {
      $user = Lecturer::where('id', Auth::guard(Lecturer::Guard)->id())->first();
      $fileName = strtoupper("{$user->surname}{$user->middle_name}_avatar") . '_' . time() . '.' . $request->file('profilePhoto')->extension();
      if (Storage::disk('public')->exists("avatar/lecturers/{$user->avatar}")) {
        Storage::disk('public')->delete("avatar/lecturers/{$user->avatar}");
        Storage::putFileAs('public/avatar/lecturers', $request->file('profilePhoto'), $fileName);
      } else {
        Storage::putFileAs('public/avatar/lecturers', $request->file('profilePhoto'), $fileName);
      }
    } else {
      $user = User::where('id', Auth::id())->first();
      $fileName = strtoupper("{$user->surname}{$user->middle_name}_avatar") . '_' . time() . '.' . $request->file('profilePhoto')->extension();
      if (Storage::disk('public')->exists("avatar/students/{$user->avatar}")) {
        Storage::disk('public')->delete("avatar/students/{$user->avatar}");
        Storage::putFileAs('public/avatar/students', $request->file('profilePhoto'), $fileName);
      } else {
        Storage::putFileAs('public/avatar/students', $request->file('profilePhoto'), $fileName);
      }
    }
    return $fileName;
  }
}
