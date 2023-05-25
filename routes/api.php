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

Route::get('/logout', function () {
    return "logout";
});

Route::controller(\App\Http\Controllers\ClassesController::class)->group(function (){
    Route::get('/class/{user_id}' , 'index')->name('class.index');
    Route::get('/class/{user_id}/{id}' , 'index')->name('class.index');
    Route::get('/class/{user_id}/create' , 'create')->name('class.create');
    Route::get('/class/{user_id}/{class_id}/update' , 'update')->name('class.update');
    Route::get('/class/{user_id}/delete/{id}' , 'delete')->name('class.delete');

    Route::get('/student/{user_id}/join/class' , 'join')->name('class.join');
    Route::get('/student/{user_id}/out/class/{class_id}' , 'out')->name('class.unjoin');

});

Route::controller(\App\Http\Controllers\AbsentController::class)->group(function (){
    Route::get('/teacher/{user_id}/absent' , 'indexTeacher')->name('absent.index.teacher');
    Route::get('/teacher/{user_id}/create/absent' , 'create')->name('absent.create');
    Route::get('/teacher/{user_id}/update/absent/{id}' , 'update')->name('absent.update');
    Route::get('/teacher/{user_id}/delete/absent/{id}' , 'delete')->name('absent.delete');

    Route::get('/absent/{user_id}/post/{absent_id}/action'  , 'absents')->name('absent.action');
});
