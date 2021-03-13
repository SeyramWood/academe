<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ManageProfile;

class ProfileController extends Controller
{
    use ManageProfile;

    public function editProfile(Request $request)
    {
        return $this->updateProfile($request);
    }
    public function editProfilePhoto(Request $request)
    {
        return $this->updateProfilePhoto($request);
    }
}
