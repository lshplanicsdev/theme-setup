<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\Navbar_menuController;
use App\Http\Controllers\navbarmenuController;
use App\Http\Controllers\ProductController;
use App\Models\navbarmenu;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layout.app');
});

// Route::get('/menu',function(){
//     return view('vertical-menu-template.menu');
// });

Route::resource('menus', MenuController::class);
// we already create route here

Route::get('/home',function(){
    return view('home');
});

Route::get('/app-user-view-account',[MenuController::class,'displayMenus']);

Route::view('card','Admin.menus.cards-basic');


Route::resource('product', ProductController::class);
