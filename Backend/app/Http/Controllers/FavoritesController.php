<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Services\FavoritesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Categories;

class FavoritesController extends Controller
{
    protected $favoritesService;

    public function __construct(FavoritesService $favoritesService) {
        $this->favoritesService = $favoritesService;
    }

    public function index($userId):JsonResponse
    {
        return response()->json($this->favoritesService->getFavoritesByID($userId));
    }

    public function store(Request $request, $postID):JsonResponse
    {
       // $user = auth()->user(); // Obtiene el usuario autenticado automáticamente
       // return response()->json($this->favoritesService->addFavorite($user, $postID));
        return response()->json($this->favoritesService->addFavorite($postID));
    }

    public function destroy(Request $request, $postID):JsonResponse
    {
        // $user = auth()->user(); // Obtiene el usuario autenticado automáticamente
        // return response()->json($this->favoritesService->removeFavorite($user, $postID));
        return response()->json($this->favoritesService->removeFavorite($postID));
    }
}