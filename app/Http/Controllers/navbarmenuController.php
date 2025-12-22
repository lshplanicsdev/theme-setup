<?php

namespace App\Http\Controllers;

use App\Models\navbarmenu;
use Illuminate\Http\Request;

class navbarmenuController extends Controller
{
    public function AddMenu(Request $request){
    //     $validation = validator()->make($request->all(),[
    //         'title' => 'required',
    //         'url' => 'required',
    //     ]);

    //     if($validation->fails()){
    //         return response()->json([
    //         'status' => false,
    //         'message' => "request must be not fullfilled",
    //         'error' => $validation->errors()->all(),
    //     ]);
    //     }

    //     $menus = navbarmenu::create([
    //         'title' => $request->title,
    //         'url' => "localhost::3000/" . $request->url
    //     ]);
    //     return response()->json([
    //         'status' => true,
    //         'menu' => $menus
    //     ]);
    // }
    
}
