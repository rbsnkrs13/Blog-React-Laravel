<?php

namespace App\Services;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FavoritesService {
    
    public function addFavorite(User $user, $postId)
    {
        $post = Post::find($postId); // Encuentra el post
    
        if ($post) {
            // Solo pasamos el post_id ahora
            $user->favorites()->create([
                'post_id' => $post->id,
            ]);
            return response()->json(['mensaje' => 'Post marcado como favorito']);
        }
    
        return response()->json(['mensaje' => 'Post no encontrado']);
    }


    
        public function removeFavorite(User $user, $postId)
        {
            $post = Post::find($postId); // Encuentra el post
        
            if ($post) {
                // Eliminar manualmente de la tabla favorites
                $user->favorites()->where('post_id', $post->id)->delete();
                return response()->json(['mensaje' => 'Post eliminado de favoritos']);
            }
        
            return response()->json(['mensaje' => 'Post no encontrado']);
        }

    public function getFavoritesByID($userId)
    {
        $user = User::find($userId); //no hace falta poner ID ya que find es un metodo predefinido de laravel que busca la PK
        if ($user) {
            $favorites = $user->favorites()->get(); // Obtiene todos los favoritos del usuario
            return $favorites;
        }
        return response()->json(['message' => 'Usuario no encontrado'], 404);
    }
}