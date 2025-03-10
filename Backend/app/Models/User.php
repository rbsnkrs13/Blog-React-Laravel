<?php
// Los modelos de Roles y Permisos no son necesarios crealos puesto que estan en una carpeta: vendor/spatie/laravel-permision/src/models 

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Contracts\Role;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, HasPermissions, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [ // Cambiamos configuración predeterminada ya que hemos añadido campos a la tabla USERS
        'name_user',
        'email_user',
        'password_user',
        // 'name_lastName',
        'img_user',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password_user',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password_user' => 'hashed',
        ];
    }
    public function getAuthPassword()
    {
        return $this->password_user;
    }
    // Relación muchos a muchos con los posts
    public function favorites()
    {
        return $this->belongsToMany(Post::class, 'favorites') // 'favorites' es la tabla intermedia
            ->withPivot('categories_id') // Si necesitas campos adicionales como category_id
            ->withTimestamps();
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            'id' => $this->id, // Agrega 'id' al payload
            'name' => $this->name_user,
            'role' => $this->roleClass
        ];
    }

}
