<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                'username' => 'required',
                'email' => 'required|unique:users,email',
                'password' => 'required'
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => "validation error",
                'error' => $validation->errors()->all()
            ], 422);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json([
            'status' => true,
            'message' => "record inserted successfully"
        ], 200);
    }

    public function login(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [

                'email' => 'required',
                'password' => 'required'
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => "validation error",
                'error' => $validation->errors()->all()
            ], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $authuser = Auth::user();
            return response()->json([
                'status' => true,
                'message' => "user loged successfully",
                'token' => $authuser->createToken('Api token')->plainTextToken,
                'token_type' => 'bearer'
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'user not login',
            ], 403);
        }
    }

    public function logout(Request $request)
    {

        dd($request);
        $user = $request->user();
        $user->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' => "record deleted sucessfully"
        ]);
    }
}
