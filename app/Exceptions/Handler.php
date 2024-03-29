<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    protected function unauthenticated($request, AuthenticationException $authenticationException)
    {
        $guard = $authenticationException->guards()[0];
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated', 401]);
        }
        switch ($guard) {
            case 'faculty':
                $login = 'account';
                break;
            default:
                $login = 'account';
                break;
        }
        return redirect()->guest(route($login));
    }
}
