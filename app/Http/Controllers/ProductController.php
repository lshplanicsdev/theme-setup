<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::get();
        return view('Admin.menus.product', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Admin.menus.addProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validation = Validator::make(
            $request->all(),
            [
                'pname' => 'required',
                'pprice' => 'required',
                'discription' => 'required',
                'pimage' => 'required'
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'error' => $validation->errors()->all()
            ], 422);
        }
        $imageName = "";

        if ($request->hasFile('pimage')) {
            $image = $request->file('pimage');
            $imageName = time() . "." . $image->getClientOriginalExtension();
            //directly pass in storage disk
            // $image->move(public_path('image/'),$imageName);
            $imagePath = $request->file('pimage')->store('product_image', 'public');

            $product = Product::create([
                'p_name' => $request->pname,
                'p_price' => $request->pprice,
                'discription' => $request->discription,
                'p_image' => $imagePath,
            ]);
            return response()->json([
                'status' => true,
                'message' => "product added successfully"
            ], 200)->with('toast_success', "menu saved successfully");
        } else {
            return response()->json([
                'status' => false,
                'message' => "product not added"
            ]);
        }
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
    public function edit(string $id)
    {
        $product = Product::find($id);
        return view('Admin.menus.addProduct', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request->all());
        $validation = Validator::make(
            $request->all(),
            [
                'pname' => 'required',
                'pprice' => 'required',
                'discription' => 'required',
                'pimage' => 'required'
            ]
        );

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'error' => $validation->errors()->all()
            ], 422);
        }


        if ($request->hasFile('pimage')) {

            $image = $request->file('pimage');
            $imageName = time() . "." . $image->getClientOriginalExtension();
            $imagePath = $request->file('pimage')->store('product_image', 'public');
            $product = Product::find($id);
            // $oldimage = public_path('storage/') . $product->p_image;
            // if (!empty($oldimage)) {
            //     unlink($oldimage);
            // } else {
            //     $imagePath = public_path('storage/') . $product->p_image;
            // }
            $product->update([
                'p_name' => $request->pname,
                'p_price' => $request->pprice,
                'discription' => $request->discription,
                'p_image' => $imagePath,

            ]);
            return response()->json([
                'status' => true,
                "message" => "this is update section"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $product = Product::find($id);

        $product->delete();
        return redirect()->route('product.index');
        // if ($product) {
        //     return response()->json([
        //         'status' => true,
        //         'message' => 'product deleted successfully'
        //     ]);
        // } else {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'something want wrong'
        //     ]);
        // }
    }
}
