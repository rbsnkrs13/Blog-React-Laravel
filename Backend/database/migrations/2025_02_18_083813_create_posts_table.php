<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_categories')->nullable();  // Puede nulo porque un post puede no tener categoria. 
            $table->foreign('id_categories')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('id_user')->nullable(false);  
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('title')->nullable(false);
            $table->text('content')->nullable(false);
            $table->enum('status', ['draft', 'published', 'deleted'])->default('draft'); // Enum para crear borrador, activo, y eliminado
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
