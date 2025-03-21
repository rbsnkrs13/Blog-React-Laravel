<?php 
// Los modelos de Roles y Permisos no son necesarios crealos puesto que estan en una carpeta: vendor/spatie/laravel-permision/src/models 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Añadimos esta linea y la siguiente para que la linea 12 funcione
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory, Notifiable;

    protected $appends = ['isFav']; // Agregamos isFav a la respuesta JSON

    public function getIsFavAttribute() // esta función se utiliza para devolver true si el user está autentificado y si tiene post fav
    {
        
        return Auth::check() 
            ? Favorites::where('user_id', Auth::id())->where('post_id', $this->id)->exists() 
            : false;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [ // Copiamos la estructura de el modelo user.php y cambiamos los campos de la tabla para que concuerde con la tabla Post
        'id_categories',
        'user_id',
        'title',
        'content',
        'status',
        'views'
    ];

    // Relación muchos a muchos con los usuarios (si deseas acceder a favoritos desde el post)
    public function favoritedBy()
    {
        return $this->belongsToMany(User::class, 'favorites') // 'favorites' es la tabla intermedia
                    ->withPivot('categories_id') // Si necesitas campos adicionales
                    ->withTimestamps();
    }
}
