<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Traits\Auth\Account;
use App\Http\Controllers\Controller;


class RegisterController extends Controller
{
    use Account;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:faculty')->except('logout');
    }
    public function index()
    {
        return inertia('Welcome');
    }
    public function createAccount(Request $request)
    {
        return $this->register($request);
    }
}
