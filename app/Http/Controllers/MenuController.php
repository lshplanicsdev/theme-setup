<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function displayMenus()
    {
        $menus = Menu::get();

        // return view('app-user-view-account', compact('menus'));
        return view('Admin.menus.index', compact('menus'));
    }

    public function index()
    {
        $menus = Menu::get();
        // $menus = [];

        return view('Admin.menus.index', compact('menus'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Admin.menus.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuRequest $request)
    {
        $menu = Menu::create([
            'title' => $request->title,
            'url' =>  $request->url
        ]);

        // return view('Admin.menus.index');
        // return redirect()->route('menus.index')->with('success', 'Menu created successfully!');
        return redirect()->back()->with('success', 'Menu created successfully!');

        // dd($request->all())

    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        return view('Admin.menus.create', compact('menu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        // dd($request->all());
        $menu->update([
            'title' => $request->title,
            'url' => $request->url
        ]);
        $menu->save();
        return redirect()->route('menus.index')->with('success', 'Menu created successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $menu->delete();
        return redirect()->route('menus.index')->with('success', 'Menu deleted successfully');
    }
}
