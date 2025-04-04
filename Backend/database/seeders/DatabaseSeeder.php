<?php

namespace Database\Seeders;

use App\Models\Categories;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Favorites;
use App\Models\ModelHasRoles;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            rolesSeeder::class, // Crea roles y permisos
            userSeeder::class, // Crea usuarios admin
            categoriesSeeder::class, // Crea las categorías
        ]);

        $users = User::factory(100)->create();

        $users->each(function ($user) {
            $role = fake()->randomFloat(2, 0, 1) < 0.6 ? 'editor' : 'reader'; //El 2 del random es para que genere 2 decimales ,genera un numero decilmal entre 0 y 1 , si el num es menor de 0.6 asigna editor y si es mayor asigna reader
            $user->assignRole($role);
        });

        $editors = User::role('editor')->get();
        $posts = Post::factory(1000)->make()->each(function ($post) use ($editors) {
            $post->user_id = $editors->random()->id;
            $post->save();
        });

        $users->each(function ($user) use ($posts) {
            $postsRandom = $posts->random(rand(1, 10));
            foreach ($postsRandom as $post) {
                Favorites::factory()->create([
                    'user_id' => $user->id,
                    'post_id' => $post->id,
                ]);
            }
        });
    }
}
