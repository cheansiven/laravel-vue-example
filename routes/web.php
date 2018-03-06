<?php

use App\Ware;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/laptops', function() {
    return Ware::where('type','laptop')->get();
});

Route::get('/api/mobiles', function() {
    return Ware::where('type','mobile')->get();
});

Route::get('/api/accessories', function() {
    return Ware::where('type','accessorie')->get();
});
