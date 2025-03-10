<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;


class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_user' => ['required', 'string', 'max:255'],
            'email_user' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password_user' => ['required', 'confirmed', Rules\Password::min(6)], //ojo cuidao con eso que podria estar mal
        ]);



        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            $user = User::create([
                'name_user' => $request->input('name_user'),
                'email_user' => $request->input('email_user'),
                'password_user' => Hash::make($request->input('password_user')),
            ]);
        }


        $token = JWTAuth::fromUser($user);

        return response()->json(['token' => $token]);
    }
}
