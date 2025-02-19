<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoriesRequest;
use App\Models\Categories;
use App\Services\CategoriesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class CategoriesController extends Controller
{

    protected $categoriesService;

    public function __construct(CategoriesService $categoriesService)
    {
        $this->categoriesService = $categoriesService;
    }

    /**
     * Mandamos lo que queremos ver como vista principal, en este caso los datos de todas las categorias.
     */
    public function index():JsonResponse
    {
        return response()->json($this->categoriesService->getAllCategories());
    }

    /**
     * Guardamos una nueva categoría en la bbdd.
     */
    public function store(CategoriesRequest $request)
    {
        //
    }

    /**
     * Mostramos el dato de forma unitaria
     */
    public function show(Categories $categories):JsonResponse
    {
        return response()->json();
    }

    /**
     * Actualizamos la categoría en la bbdd.
     */
    public function update(CategoriesRequest $request, Categories $categories):JsonResponse
    {
        return response()->json();
    }

    /**
     * Eliminar categoría de la bbdd.
     */
    public function destroy(Categories $categories)
    {
        //
    }
}
