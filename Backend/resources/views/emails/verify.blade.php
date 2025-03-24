<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Correo</title>
</head>
<body>
    <h2>¡Hola, {{ $user->name_user }}!</h2>
    <p>Gracias por registrarte en C-Blog. Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico:</p>
    <p>
        <a href="{{ $verificationUrl }}">Verificar mi correo</a>
    </p>
    <p>Este enlace expirará en 60 minutos.</p>
    <p>Si no creaste una cuenta, por favor ignora este correo.</p>
</body>
</html>