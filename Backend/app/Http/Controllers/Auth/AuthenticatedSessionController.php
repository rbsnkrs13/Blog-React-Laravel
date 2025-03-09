<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Si la autenticación tiene éxito, generamos un token JWT
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);

            // Devolvemos el token en la respuesta
            return response()->json(['token' => $token]);
        }

        // Si las credenciales son incorrectas
        return response()->json(['error' => 'Las credenciales no corresponden'], 401);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::logout();

        return response()->noContent();
    }
}
