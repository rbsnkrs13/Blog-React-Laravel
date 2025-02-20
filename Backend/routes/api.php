<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
//cambiar cuando lo tengamos hecho
 Route::controller(ProfileController::class)->group(function () {
//     Route::get('/users', 'index')->name('users.index');
//     Route::post('/users', 'store')->name('users.store');
     Route::post('/users/create',  'store')->name('users.store');//->middleware(['auth'])->middleware(['role:administrador']);
//     Route::get('/users/{user}', 'show')->name('users.show')->middleware(['auth']);
//     Route::put('/users/{user}', 'update')->name('users.update')->middleware(['auth'])->middleware(['role:administrador']);
//     Route::delete('/users/{user}', 'destroy')->name('users.destroy')->middleware(['auth'])->middleware(['role:administrador']);
//     Route::get('/users/{user}/edit', 'edit')->name('users.edit')->middleware(['auth'])->middleware(['role:administrador']);
});


Route::controller(CategoriesController::class)->group(function () {
    Route::get('/categories', 'index');
    Route::post('/categories/store', 'store')->name('categories.store');//->middleware(['auth'])->middleware(['role:administrador']);
    //esta es para el formulario de creacion, no nos encargamos de eso
    Route::get('/categories/show/{categories}', 'show')->name('categories.show');//->middleware(['auth']);
    Route::put('/categories/update/{categories}', 'update')->name('categories.update');//->middleware(['auth'])->middleware(['role:administrador']);
    Route::delete('/categories/destroy/{categories}', 'destroy')->name('categories.destroy');//->middleware(['auth'])->middleware(['role:administrador']);
});

// Route::post('/categories/create', [CategoriesController::class, 'store']);
Route::controller(PostController::class)->group(function () {
    Route::get('/posts', 'index')->name('posts.index');
    Route::post('/posts', 'store')->name('posts.store');
    //Route::get('/posts/create',  'create')->name('posts.create')->middleware(['auth'])->middleware(['role:administrador']);
    Route::get('/posts/{post}', 'show')->name('posts.show')->middleware(['auth']);
    Route::put('/posts/{post}', 'update')->name('posts.update')->middleware(['auth'])->middleware(['role:administrador']);
    Route::delete('/posts/{post}', 'destroy')->name('posts.destroy')->middleware(['auth'])->middleware(['role:administrador']);
    //Route::get('/posts/{post}/edit', 'edit')->name('posts.edit')->middleware(['auth'])->middleware(['role:administrador']);
});


Route::controller(RoleController::class)->group(function () {
    Route::get('/role', 'index');
    Route::post('/role', 'store')->name('categories.store');
    //esta es para el formulario de creacion, no nos encargamos de eso
    //Route::get('/categories/create',  'create')->name('categories.create')->middleware(['auth'])->middleware(['role:administrador']);
    Route::get('/categories/{category}', 'show')->name('categories.show')->middleware(['auth']);
    Route::put('/categories/{category}', 'update')->name('categories.update')->middleware(['auth'])->middleware(['role:administrador']);
    Route::delete('/categories/{category}', 'destroy')->name('categories.destroy')->middleware(['auth'])->middleware(['role:administrador']);
    //esta es para el formulario de edicion, tampoco nos encargamos de eso
    //Route::get('/categories/{category}/edit', 'edit')->name('categories.edit')->middleware(['auth'])->middleware(['role:administrador']);
});