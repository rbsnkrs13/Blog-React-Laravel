<?php
// Hemos creado dentro de la carpeta App, la carpeta Services, para añadir los servicios de cada modelo
namespace App\Services;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostService {
    
    public function getAllPost(){ // Esta función recoge todos los datos de la tabla Post
        return Post::all();
    }

    public function getPostById($id){    // Devuelve el post con el ID especificado, o lanza un error 404 si no existe
        return Post::findOrFail($id); 
    }
    
}


?>