<?php

namespace App\Traits\Auth;

trait RedirectsUsers
{
    /**
     * Get the post register / login redirect path.
     *
     * @return string
     */
    public function redirectPath()
    {
        if (method_exists($this, 'redirectTo')) {
            return $this->redirectTo();
        }
        // if ($guard === 'faculty') {
        //     # code...
        // }
        return property_exists($this, 'redirectTo') ? $this->redirectTo : '/dashboard';
        // if ($guard === 'web') {
        //     # code...
        //     return property_exists($this, 'redirectTo') ? $this->redirectTo : '/dashboard/student';
        // }
    }
}
