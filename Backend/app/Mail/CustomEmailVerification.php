<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Log;

class CustomEmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $verificationUrl;

    /**
     * Create a new message instance.
     */
    public function __construct($user)
    {
        $this->user = $user;

        $hash = sha1($this->user->getEmailForVerification()); // Generamos el hash para el enlace de verificación
        $this->verificationUrl = URL::temporarySignedRoute( // Generamos el enlace de verificación firmado
            'verification.verify', Carbon::now()->addMinutes(60), [
                'id' => $this->user->id,
                'hash' => $hash,//sha1($this->user->getEmailForVerification()), 
            ]
        );

       // $this->verificationUrl = str_replace('http://127.0.0.1:8000/', url('api/') . '/', $this->verificationUrl);
        // Log::debug('Generated Verification URL: ' . $this->verificationUrl);
       
    }

    /**
     * Get the message content definition.
     */
    public function build()
    {
        return $this->subject('Verificación de correo electrónico') // Asunto del correo
            ->view('emails.verify') // Aquí usamos la vista Blade que creamos
            ->with([
                'user' => $this->user, // Pasamos el usuario a la vista
                'verificationUrl' => $this->verificationUrl, // Pasamos el enlace de verificación
        ]);
    }

}
