<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {

        $credentials = [
            'email_user' => $request->input('email'),
            'password' => $request->input('password'), // Laravel espera 'password', pero lo solucionamos con getAuthPassword()
        ];

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Las credenciales no corresponden'], 401);
        }

        $user = Auth::user();
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'authToken' => $token,
            'user' => [
                '_id' => $user->id,
                'name' => $user->name_user,
                'role' => $user->roles->pluck('name'),
            ]
        ]);
        // $credentials = [
        //     'email_user' => $request->input('email'),
        //     'password' => $request->input('password'), // Deja la contraseña en texto plano
        // ];

        // if (Auth::attempt($credentials)) {
        //     $user = Auth::user();
        //     $token = JWTAuth::fromUser($user);
        //     return response()->json(['token' => $token]);
        // } else {
        //     return response()->json(['error' => 'Las credenciales no corresponden'], 401);
        // }

        // // Si las credenciales son incorrectas
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
