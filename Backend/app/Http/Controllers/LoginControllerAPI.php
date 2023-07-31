<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Auth;
class LoginControllerAPI extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function login(Request $request)
    {
        // Validar las credenciales enviadas por el usuario
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // Las credenciales son válidas, el usuario ha iniciado sesión

            // Generar el token de acceso para el usuario autenticado
            $accessToken = Auth::user()->createToken('API Token')->plainTextToken;

            // Devolver una respuesta exitosa con el token de acceso
            return response()->json([
                'access_token' => $accessToken,
                'token_type' => 'Bearer',
            ]);
        } else {
            // Las credenciales son inválidas, el inicio de sesión ha fallado

            // Devolver una respuesta de error
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }
    }
}
