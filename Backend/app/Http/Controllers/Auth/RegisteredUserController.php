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
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail; // Asegúrate de importar Mail
use App\Mail\CustomEmailVerification; // Asegúrate de importar tu clase de correo



class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
//     public function store(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'name_user' => ['required', 'string', 'max:255'],
//             'email_user' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
//             'password_user' => ['required', 'confirmed', Rules\Password::min(6)], //ojo cuidao con eso que podria estar mal
//             'img_user' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'], // Imagen opcional
//         ]);

//         if ($validator->fails()) {
//             return response()->json(['errors' => $validator->errors()], 422);
//         } else {

//             $imgPath = 'avatars/default.png'; // Imagen por defecto
//             if ($request->hasFile('img_user') && $request->file('img_user')->isValid()) {
//                 $image = $request->file('img_user');
//                 $imageName = time() . '.' . $image->extension(); // funcion time para generrar un nombre unico a traves del time
//                 $image->move(public_path('avatars'), $imageName); // Guardar en public/avatars
//                 $imgPath = 'avatars/' . $imageName; // Ruta para la BD
//             }

//             $user = User::create([
//                 'name_user' => $request->input('name_user'),
//                 'email_user' => $request->input('email_user'),
//                 'password_user' => Hash::make($request->input('password_user')),
//                 'img_user' => $imgPath, // Guardamos la ruta en la base de datos
//             ]);
//             if ($user) {
//                 try {
//                     $user->assignRole('reader');

//                 } catch (\Exception $e) {
//                     return response()->json(["mensaje" => "Error al asignar el role", 400]);
//                 }
//                 return response()->json($user, 201);
//         }

//        // $token = JWTAuth::fromUser($user);
//             $user->sendEmailVerificationNotification();


//             return response()->json([
//                 'message' => "Usuario creado, revise su email para verificar",
//                 'user' => $user
//             ], 201);
//         }

//         // Si el usuario no se creó correctamente, devolvemos un error
//         return response()->json(['message' => 'Hubo un problema al crear el usuario.'], 500);
//         }
// }
public function store(Request $request)
{
    // Validación de los datos
    $validator = Validator::make($request->all(), [
        'name_user' => ['required', 'string', 'max:255'],
        'email_user' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
        'password_user' => ['required', 'confirmed', Rules\Password::min(6)], 
        'img_user' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
    ]);

    // Si hay errores en la validación, devolver los errores
    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    // Imagen por defecto
    $imgPath = 'avatars/default.png'; 

    // Si el usuario sube una imagen, procesarla
    if ($request->hasFile('img_user') && $request->file('img_user')->isValid()) {
        $image = $request->file('img_user');
        $imageName = time() . '.' . $image->extension(); // Genera un nombre único
        $image->move(public_path('avatars'), $imageName); // Guarda la imagen en public/avatars
        $imgPath = 'avatars/' . $imageName; // Ruta de la imagen en la base de datos
    }

    // Crear el usuario
    $user = User::create([
        'name_user' => $request->input('name_user'),
        'email_user' => $request->input('email_user'),
        'password_user' => Hash::make($request->input('password_user')),
        'img_user' => $imgPath, // Guardar ruta de la imagen en la base de datos
    ]);

    // Verificamos si el usuario fue creado correctamente
    if ($user) {
        try {
            // Asignar el rol al usuario
            $user->assignRole('reader');
            Mail::to($user->email_user)->send(new CustomEmailVerification($user));
        } catch (\Exception $e) {
            return response()->json(["mensaje" => "Error al asignar el rol", 400]);
        }

        // Enviar notificación de verificación de correo
        

        // Respuesta con éxito
        return response()->json([
            'message' => "Usuario creado, revise su email para verificar",
            'user' => $user
        ], 201);
    }

    // Si hubo un error en la creación del usuario, devolver error
    return response()->json(['message' => 'Hubo un problema al crear el usuario.'], 500);
}
}