<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(\App\Http\Controllers\AuthController::class)->group(function (){
    Route::get('/login/form' , 'login')->name('login.form');
    Route::get('/signup/form' , 'signUp')->name('signup.form');
    Route::get('/signup/add/password/{email}' , 'savePassword')->name('signup.save.password');
    Route::get('/signup/add/information/{email}' , 'addInformation')->name('signup.add.information');
    Route::get('/logout' , 'logout')->name('logout');
});

Route::controller(\App\Http\Controllers\ClassesController::class)->group(function (){
    Route::get('/class/{user_id}' , 'index')->name('class.index');
    Route::get('/class/{user_id}/{id}' , 'index')->name('class.index');
    Route::get('/class/{user_id}/create' , 'create')->name('class.create');
    Route::get('/class/{class_id}/update' , 'update')->name('class.update');
    Route::get('/class/{id}/delete' , 'delete')->name('class.delete');

    Route::get('/class/{user_id}/join' , 'studentJoin')->name('class.join');
    Route::get('/class/{user_id}/unjoin' , 'studentUnJoin')->name('class.unjoin');

});

Route::controller(\App\Http\Controllers\AbsentController::class)->group(function (){
    Route::get('/absent/{user_id}' , 'index')->name('absent.index');
    Route::get('/absent/{user_id}/create' , 'create')->name('absent.create');
    Route::get('/absent/{id}/update' , 'update')->name('absent.update');
    Route::get('/absent/{id}/delete' , 'delete')->name('absent.delete');

    Route::get('/absent/{user_id}/post/{absent_id}/action'  , 'absents')->name('absent.action');
});
