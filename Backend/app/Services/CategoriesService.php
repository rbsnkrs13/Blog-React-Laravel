<?php
// Hemos creado dentro de la carpeta App, la carpeta Services, para añadir los servicios de cada modelo
namespace App\Services;

use App\Models\Categories;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class CategoriesService {
    
    public function getAllCategories(){ // Esta función recoge todas las categorias
        return Categories::all();
    }

    public function getCategoriestById($id){    // Devuelve el post con el ID especificado, o lanza un error 404 si no existe
        return Categories::findOrFail($id); 
    }

    public function updateCategories($data){    // Esta función recibe los datos del post actualizado, con los cambios indicados por el usuario, 
        $categories = Categories::findOrFail($data->id); // si encuentra el id del post cambia los datos del antiguo. 
        if ($categories) {
            $categories->update([
                'name' => $data->name,
                'description' => $data->description,
            ]);
            return true; 
        }else {
            return false; 
        }
    }
    

}


?>