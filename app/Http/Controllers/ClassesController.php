<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClassResources;
use App\Models\Classes;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClassesController extends Controller
{
    public function index($user_id){
        $class = ClassResources::collection(
            Classes::query()->where('teacher_id' , $user_id)->get()
        );
        return response()->json($class);
    }

    public function show($id){
        $classs = ClassResources::collection(
            Classes::query()->where('id' , $id)->get()
        );
        return response()->json($classs);
    }

    public function create(Request $request , $user_id){

        $name = $request->query('name');
        $vocation_id = $request->query('vocationId');

        $validateClass = Classes::query()->where('name' , $name)->where('teacher_id' , $user_id)->first();

        $randomNumber = mt_rand(100000, 999999); // Generate a random number between 1000 and 9999


        if ($validateClass){
            $error = "name cannot be same";
            return response()->json($error);
        } else {
            Classes::query()->create([
                'name' => $name,
                'teacher_id' => $user_id,
                'code' => $randomNumber,
                'vocation_id' => $vocation_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            return "successfully create class";
        }

    }

    public function update(Request $request , $class_id){

        $name = $request->query('name');
        $vocation_id = $request->query('vocation_id');

        $classValidate = Classes::query()->where('id' , $class_id)->first();

        if (!$classValidate){
            $error = "class Id Not same";
            return response()->json($error);
        } else {
            $classValidate->update([
               'name' => $name,
               'vocation_id' => $vocation_id
            ]);

            return "success update class";
        }
    }

    public function delete($id){
        Classes::query()->where('id' , $id)->delete();
        return "successfully delete";
    }

    public function studentJoin(Request $request , $user_id){

        $code = $request->query('code');

        $codeValidate =  Classes::query()->where('code' , '=' , $code)->first();

        if (!$codeValidate){
            $error = "Code is wrong";
            return response()->json($error);
        } else {
            DB::table('pivot_students_to_classes')->insert([
                'student_id' => $user_id,
                'class_id' => $codeValidate->id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            return "successfull join class";
        }

    }

    public function studentUnjoin($userid , $classId){

        DB::table('pivot_students_to_classes')->where('student_id' , $userid)->where('class_id' , $classId)->delete();
        return "successfully delete";

    }

}
