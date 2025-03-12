<?php

namespace App\Http;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Authenticate;
use App\Http\Middleware\JwtMiddleware;
use Spatie\Permission\Middlewares\RoleMiddleware;
use Spatie\Permission\Middlewares\PermissionMiddleware;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ];

    protected $middlewareGroups = [
        'web' => [
            // Las rutas web van aquí
        ],

        'api' => [
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    protected $routeMiddleware = [
        'auth' => AuthenticatedSessionController::class, // Middleware de autenticación básica
        'JwtMiddleware' => JwtMiddleware::class,  // Tu middleware JWT
        'role' => RoleMiddleware::class,          // Middleware de roles de Spatie
        'permission' => PermissionMiddleware::class, // Middleware de permisos de Spatie
    ];
}