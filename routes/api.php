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
    Route::get('/class/{user_id}/{id}' , 'showId')->name('class.show');
    Route::get('/class/{user_id}/create/class' , 'create')->name('class.create');
    Route::get('/class/{user_id}/{class_id}/update' , 'update')->name('class.update');
    Route::get('/class/{user_id}/delete/{id}' , 'delete')->name('class.delete');

    Route::get('/class/{id}' , 'show')->name('class.show');
    Route::get('/student/{user_id}/class/{class_id}' , 'studentClassById')->name('student.class');
    Route::get('/student/{user_id}/class' , 'studentClass')->name('student.class');

    http://127.0.0.1:8000/api/student/10/class

    Route::get('/student/{user_id}/join/class' , 'join')->name('class.join');
    Route::get('/student/{user_id}/out/class/{class_id}' , 'out')->name('class.unjoin');
});

Route::controller(\App\Http\Controllers\VocationController::class)->group(function (){
    Route::get('/vocation/{user_id}' , 'index')->name('class.index');
    Route::get('/vocation/create/{user_id}' , 'create')->name('class.index');
    Route::get('/vocation/update/{id}' , 'update')->name('class.index');
    Route::get('/vocation/delete/{id}' , 'delete')->name('class.index');
});

Route::controller(\App\Http\Controllers\AbsentController::class)->group(function (){
    Route::get('/teacher/{user_id}/absent' , 'indexTeacher')->name('absent.index.teacher');
    Route::get('/teacher/{user_id}/create/absent' , 'create')->name('absent.create');
    Route::get('/teacher/{user_id}/update/absent/{id}' , 'update')->name('absent.update');
    Route::get('/teacher/{user_id}/delete/absent/{id}' , 'delete')->name('absent.delete');

//    Route::get('/absent/{user_id}' ,  'show')->name('student.show');

    Route::get('/student/{id}/absent/{absent_id}' , 'studentAbsentShow')->name('student.absent');
    Route::get('/student/absent/{student_id}' , 'studentAbsent')->name('student.absent');
    Route::get('/absent/{absent_id}' , 'absentShow')->name('student.absent');
    Route::get('/my/{user_id}/absent/{absent_id}' , 'myAbsentShow')->name('student.absent');
    Route::get('/student/absent/{student_id}/status/{status}' , 'studentAbsentStatus')->name('student.absent');
    Route::get('/absent/created/by/student/{student_id}' , 'absentCreatedByStudent')->name('student.absent');



    Route::get('/absent/{user_id}/post/{absent_id}/action'  , 'absents')->name('absent.action');
});

Route::controller(\App\Http\Controllers\HistoryController::class)->group(function (){
    Route::get('/history/absent/{user_id}' , 'historyAbsence')->name('history.absence');
    Route::get('/history/absent/{user_id}/{id}' , 'historyAbsenceById')->name('history.absence');

});

Route::controller(\App\Http\Controllers\ActivityController::class)->group(function (){
    Route::get('/activity/recently/{user_id}' , 'activityRecently')->name('activity.recently');
    Route::get('/activity/recently/{user_id}/{id}' , 'activityRecentlyById')->name('activity.recently');

});
