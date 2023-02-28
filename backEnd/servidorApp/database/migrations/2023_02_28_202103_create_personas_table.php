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
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido');
            $table->string('correo');
            $table->string('dni');
            $table->date('fechaNacimiento');
            $table->unsignedBigInteger('destino_id');
            // Linea donde el indico a area_id con que clave primaria de que tabla se relaciona
            $table->foreign('destino_id')->references('id')->on('destinos');
            $table->unsignedBigInteger('hotel_id');
            // Linea donde el indico a barrio_id con que clave primaria de que tabla se relaciona
            $table->foreign('hotel_id')->references('id')->on('hoteles');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
