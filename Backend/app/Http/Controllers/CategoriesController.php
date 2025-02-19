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
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        return response()->json($this->categoriesService->getAllCategories());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoriesRequest $request, Categories $categories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categories $categories)
    {
        //
    }
}
