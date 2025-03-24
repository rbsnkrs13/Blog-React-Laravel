<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordResetToken extends Model
{
    protected $table = 'password_reset_tokens';

    protected $fillable = ['email', 'token', 'created_at'];

    public $timestamps = false; // Si no tienes timestamps (created_at / updated_at) en la tabla

    // Relación inversa (si es necesario)
    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email_user');
    }
}
