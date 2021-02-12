<?php

namespace App\Traits;

use App\Models\Pledge;
use App\Models\User;

trait PasswordMembershipIdGenerator
{

    public function generateMembershipId()
    {
        if (User::all()->count() === 0) {
            $count =  User::all()->count() + 1;
            $uniqueempid = 'TBC' . date('Y') . str_pad($count, 4, '0', STR_PAD_LEFT);
            return strtoupper($uniqueempid);
        } elseif (User::all()->count()) {
            $count =  User::all()->count() + 1;
            $uniqueempid = 'TBC' . date('Y') . str_pad($count, 4, '0', STR_PAD_LEFT);
            return strtoupper($uniqueempid);
        }
    }
    public function generatePledgeToken()
    {
        $t = $this->generatePassword(3);
        if (Pledge::all()->count() === 0) {
            $count =  Pledge::all()->count() + 1;
            $uniqueempid = 'P' . date('Y') . str_pad($count, 4, '0', STR_PAD_LEFT) . $t;
            return strtoupper($uniqueempid);
        } elseif (Pledge::all()->count()) {
            $count =  Pledge::all()->count() + 1;
            $uniqueempid = 'P' . date('Y') . str_pad($count, 4, '0', STR_PAD_LEFT) . $t;
            return strtoupper($uniqueempid);
        }
    }
    public function generatePassword($length)
    {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#&%';
        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $rand = rand(0, strlen($characters) - 1);
            $password .= substr($characters, $rand, 1);
        }
        return $password;
    }
    public function generateImageName($length)
    {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $rand = rand(0, strlen($characters) - 1);
            $password .= substr($characters, $rand, 1);
        }
        return $password;
    }
}
