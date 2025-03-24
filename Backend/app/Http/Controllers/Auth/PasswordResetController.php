<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Notifications\PasswordResetNotification;
use Illuminate\Support\Facades\Mail; 
use App\Mail\PasswordResetMail;
use Illuminate\Support\Facades\Hash;


class PasswordResetController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        // Validamos el correo que se recibe en la solicitud
        $request->validate([
            'email_user' => 'required|email',  // Usamos 'email_user' en vez de 'email'
        ]);

        // Buscamos al usuario por 'email_user' en vez de 'email'
        $user = User::where('email_user', $request->email_user)->first();

        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        // Generamos el token para el restablecimiento de la contraseña
        $token = Str::random(60);

        // Insertamos el token en la tabla de password_reset_tokens
        DB::table('password_reset_tokens')->insert([
            'email_users' => $user->email_user,  // Usamos 'email_user' para hacer la inserción
            'token' => $token,
            'created_at' => now(),
        ]);

        // Enviamos el correo de restablecimiento usando la notificación personalizada
        //$user->notify(new PasswordResetNotification($token));
       // Mail::to($user->email_user)->send(new PasswordResetNotification($token)); 
       $url = url(config('app.url') . '/api/password/reset/' . $token . '?email=' . $user->email_user);

       // Enviamos el correo utilizando el Mailable
       Mail::to($user->email_user)->send(new PasswordResetMail($url));

        // Respondemos con un mensaje de éxito
        return response()->json(['message' => 'Correo de restablecimiento enviado']);
    }

    public function resetPassword(Request $request)
    {
        // Validamos que el correo, el token y la nueva contraseña estén presentes
        $request->validate([
            'email_user' => 'required|email',
            'token' => 'required',
            'password' => 'required|confirmed|min:6',  // Confirmación y validación mínima de la contraseña
        ]);

        // Buscamos el token en la base de datos
        $tokenRecord = DB::table('password_reset_tokens')->where('token', $request->token)->first();

        // Verificamos si el token es válido y corresponde al correo
        if (!$tokenRecord || $tokenRecord->email_users != $request->email_user) {
            return response()->json(['message' => 'Token inválido o correo incorrecto'], 400);
        }

        // Encontramos al usuario
        $user = User::where('email_user', $request->email_user)->first();

        // Si no existe el usuario, respondemos con error
        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        // Actualizamos la contraseña
        $user->password_user = Hash::make($request->password);
        $user->save();

        // Eliminamos el token de la tabla (opcional, ya que el token ya se ha utilizado)
        DB::table('password_reset_tokens')->where('token', $request->token)->delete();

        // Respondemos con éxito
        return response()->json(['message' => 'Contraseña restablecida correctamente']);
    }
}