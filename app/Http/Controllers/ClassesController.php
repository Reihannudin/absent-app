<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClassResources;
use App\Models\Activities;
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

    public function studentClassById($user_id , $class_id){

        $classValidations = DB::table('pivot_students_to_classes')
            ->where('student_id' , $user_id)
            ->select('class_id')
            ->get();

        $classResources = collect();

        foreach ($classValidations as $classValidation){
            $class = Classes::query()
                ->where('id' , $class_id)
                ->first();

            if ($class){
                $classResource = new ClassResources($class);
                $classResources->push($classResource);
            }

            return response()->json($classResources);
        }
    }

    public function studentClass($user_id){

        $classValidations = DB::table('pivot_students_to_classes')
            ->where('student_id' , $user_id)
            ->select('class_id')
            ->get();

        $classResources = collect();

        foreach ($classValidations as $classValidation){
            $class = Classes::query()
                ->where('id' , $classValidation->class_id)
                ->first();

            if ($class){
                $classResource = new ClassResources($class);
                $classResources->push($classResource);
            }

        }
        return response()->json($classResources);

    }


    public function studentClassAbsent($user_id, $class_id, $absent_id)
    {
        $classValidations = DB::table('pivot_students_to_classes')
            ->where('student_id', $user_id)
            ->select('class_id')
            ->get();

        $classResources = collect();

        foreach ($classValidations as $classValidation) {
            $class = Classes::query()
                ->where('id', $class_id)
                ->where('id', $classValidation->class_id)
                ->first();

            if ($class) {
                $classResource = new ClassResources($class);
                $classResources->push($classResource);
            }
        }

        return response()->json($classResources);
    }

    public function showId($user_id , $id){
        $classs = ClassResources::collection(
            Classes::query()->where('id' , $id)->get()
        );
        return response()->json($classs);
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
            return redirect(env('APP_FE_URL') . '/');
        }

    }

    public function update(Request $request , $user_id , $class_id){

        $name = $request->query('name');
        $vocation_id = $request->query('vocation_id');

        $classValidate = Classes::query()->where('id' , $class_id)->where('teacher_id' , $user_id)->first();

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

    public function delete($user_id , $id){

        $classValidate = Classes::query()->where('id' , $id)->where('teacher_id' , $user_id)->first();
        if (!$classValidate){
            $error = "you already delete";
            return response()->json($error);
        } else{
            $classValidate->delete();
            return "successfully delete";
        }
    }


    public function join(Request $request , $user_id){

        $code = $request->query('code');

        $codeValidate =  Classes::query()->where('code' , '=' , $code)->first();

        if (!$codeValidate){
            $error = "Code is wrong";
            return response()->json($error);
        } else {

            $pivotValidate = DB::table('pivot_students_to_classes')->where('student_id' , $user_id)->where('class_id' , $codeValidate->id)->first();

            if ($pivotValidate){
                $error = "Student already join";
                return response()->json($error);
            } else{
                DB::table('pivot_students_to_classes')->insert([
                    'student_id' => $user_id,
                    'class_id' => $codeValidate->id,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);

                $class = Classes::query()->where('id' , $codeValidate->id)->first();
                $vocation_id = $class->vocation_id;
                $teacher_id = $class->teacher_id;

                DB::table('pivot_user_activity')->insert([
                    'user_id' => $user_id,
                    'classes_id' => $class->id,
                    'vocation_id' => $vocation_id,
                    'teacher_id' =>$teacher_id,
                    'created_at' => Carbon::now(),
                ]);

                $activity =  DB::table('pivot_user_activity')->where('user_id' , $user_id)->where('classes_id' , $class->id)->get();

                Activities::query()->create([
                    'user_id' => $user_id,
                    'activities_id' => $activity[0]->id,
                    'classes_id' => $class->id,
                    'vocation_id' => $vocation_id,
                    'teacher_id' =>$teacher_id,
                    'created_at' => Carbon::now(),
                ]);

                $activities = Activities::query()->where('user_id' , $user_id)->where('classes_id' , $class->id)->get();

                DB::table('pivot_user_activity')->where('id' , $activity[0]->id)->update([
                    'activities_id' => $activities[0]->id,
                ]);

                return redirect(env('APP_FE_URL') . '/class');
            }
        }

    }

    public function out($userid , $classId){

        $pivotValidate =  DB::table('pivot_students_to_classes')->where('student_id' , $userid)->where('class_id' , $classId)->first();

        if (!$pivotValidate){
           $error = "you already delete";
           return response()->json($error);
        } else{
            $pivotValidate->delete();
            return "successfully delete";
        }

    }

}
