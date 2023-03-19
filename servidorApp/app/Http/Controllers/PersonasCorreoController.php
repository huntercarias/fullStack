<?php

namespace App\Http\Controllers;

use App\Models\personasCorreo;
use Illuminate\Http\Request;

class PersonasCorreoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Validación
        $request->validate([
            'nombre' => ['required'],
            'correo' => ['required'],
            'telefono' => ['required'],
            'mensaje' => ['required'],
        ]);

        $personasCorreo = personasCorreo::create([
            'nombre' => $request['nombre'],
            'correo' => $request['correo'],
            'telefono' => $request['telefono'],
            'mensaje' => $request['mensaje'],
        ]);

        $details = [
            'title' => 'Persona: '.$personasCorreo->correo,
            'body' => 'Mansaje: '.$personasCorreo->mensaje,
        ];
        \Mail::to($personasCorreo->correo)->send(new \App\Mail\sendPost($details));

        return response()->json([
            'mensaje' => 'Se Agrego Correctamente el area',
            'data' => $personasCorreo,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(personasCorreo $personasCorreo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(personasCorreo $personasCorreo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, personasCorreo $personasCorreo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(personasCorreo $personasCorreo)
    {
        //
    }
}
