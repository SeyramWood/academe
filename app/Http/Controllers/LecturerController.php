<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LecturerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:faculty');
    }
    public function profile()
    {
        return inertia('backend/Profile');
    }
}
