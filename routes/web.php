<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\Navbar_menuController;
use App\Http\Controllers\navbarmenuController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\navbarmenu;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;

Route::get('/', function () {
    return view('layout.app');
});

// Route::get('/menu',function(){
//     return view('vertical-menu-template.menu');
// });

Route::resource('menus', MenuController::class);
// we already create route here

Route::get('/home', function () {
    return view('home');
});

Route::get('/app-user-view-account', [MenuController::class, 'displayMenus']);

Route::resource('user', UserController::class);


Route::resource('product', ProductController::class);

Route::get('user-register', function () {
    return view('user.register');
})->name('user.register');
