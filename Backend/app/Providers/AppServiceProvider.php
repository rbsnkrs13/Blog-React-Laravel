<?php

namespace App\Providers;

use App\Services\PostService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(PostService::class, function ($app) { // Con esta función se está registrando las funciones del PostService para el controller
            return new PostService();
        });        
        
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
