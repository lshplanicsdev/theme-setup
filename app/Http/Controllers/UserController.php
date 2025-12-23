<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::get();
        // dd($users);
        return view('Admin.menus.userList', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Admin.menus.adduser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validation = Validator::make(
            $request->all(),
            [
                'user' => 'required',
                'email' => 'required',
                'password' => 'required',
                'role' => 'required',
                'plan' => 'required',
                'status' => 'required',
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => "validation error",
                'error' => $validation->errors()->all()
            ]);
        }

        if ($request->status == 'active') {
            $status = 1;
        } else {
            $status = 0;
        }

        $user = User::create([
            'user' => $request->user,
            'email' => $request->email,
            'password' => $request->password,
            'role' => $request->role,
            'plan' => $request->plan,
            'status' => $status,
        ]);

        return response()->json([
            'status' => true,
            'message' => "user added successfully"
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return view('Admin.menus.adduser', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validation = Validator::make(
            $request->all(),
            [
                'user' => 'required',
                'email' => 'required',
                'role' => 'required',
                'plan' => 'required',
                'status' => 'required',
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => "validation error",
                'error' => $validation->errors()->all()
            ]);
        }

        if ($request->status == 'active') {
            $status = 1;
        } else {
            $status = 0;
        }

        $user = User::find($id);
        $user->update([
            'user' => $request->user,
            'email' => $request->email,
            'role' => $request->role,
            'plan' => $request->plan,
            'status' => $status,
        ]);

        return response()->json([
            'status' => true,
            'message' => "user updated successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $user = User::find($id);
        // dd($user);
        $user->delete();
        return redirect()->route('user.index');
    }
}
