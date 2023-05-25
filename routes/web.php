<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::controller(\App\Http\Controllers\AuthController::class)->group(function (){
    Route::get('/login/form' , 'login')->name('login.form');
    Route::get('/signup/form' , 'signUp')->name('signup.form');
    Route::get('/signup/add/password/{email}' , 'addPassword')->name('signup.save.password');
    Route::get('/signup/add/information/{email}' , 'addInformation')->name('signup.add.information');
    Route::get('/logout' , 'logout')->name('logout');
});
