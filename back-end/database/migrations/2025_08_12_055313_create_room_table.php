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
        Schema::create('room', function (Blueprint $table) {
            $table->id();
            // $table->string('name');
            $table->string('title');
            $table->text('description');
            // $table->decimal('price', 8, 2);
            $table->decimal('price_per_night', 8, 2);
            // $table->unsignedInteger('capacity')->default(1);
            // $table->json('amenities')->nullable(); // store as JSON
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room');
    }
};
