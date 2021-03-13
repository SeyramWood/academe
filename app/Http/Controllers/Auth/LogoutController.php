<?php

namespace App\Http\Controllers\Auth;

use App\Traits\Auth\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    use Account;

    public function signOut(Request $request)
    {
        return $this->logout($request);
    }
}
