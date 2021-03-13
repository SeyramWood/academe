<?php

namespace App\Http\Controllers\Auth;

use App\Traits\Auth\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    use Account;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:faculty')->except('logout');
    }
    public function signIn(Request $request)
    {
        return $this->login($request);
    }
}
