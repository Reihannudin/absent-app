<?php

namespace App\Http\Controllers;

use App\Http\Resources\AbsentResources;
use App\Http\Resources\ClassResources;
use App\Models\Absents;
use App\Models\Classes;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AbsentController extends Controller
{
    public function indexTeacher($user_id){
        $absent = AbsentResources::collection(
            Absents::query()->where('teacher_id' , $user_id)->get()
        );

        return response()->json($absent);
    }

    public function absentShow($absent_id){

//        $studentValidations  = DB::table('pivot_students_to_absents')->where('absent_id' , $absent_id)->select('absents_id')->get();

//        $absentResources = collect();

//        foreach ($studentValidations as $studentValidate){
            $absent = AbsentResources::collection(
                Absents::query()->where('id' , $absent_id)->get()
            );
//            if ($absent){
//                $absentResource = new AbsentResources($absent);
//                $absentResources->push($absentResource);
//            }
//        }

        return response()->json($absent);
    }

    public function myAbsentShow( $user_id ,$absent_id){

        $absent = AbsentResources::collection(
            Absents::query()->where('id' , $absent_id)->where('teacher_id' , $user_id)->get()
        );

        return response()->json($absent);
    }

    public function studentAbsent($student_id){

        $studentValidations  = DB::table('pivot_students_to_absents')->where('student_id' , $student_id)->select('absents_id')->get();

        $absentResources = collect();

        foreach ($studentValidations as $studentValidate){
            $absent = Absents::query()->find($studentValidate->absents_id);
            if ($absent){
                $absentResource = new AbsentResources($absent);
                $absentResources->push($absentResource);
            }
        }

        return response()->json($absentResources);
    }

    public function studentAbsentShow($student_id , $absent_id){

        $studentValidations  = DB::table('pivot_students_to_absents')->where('student_id' , $student_id)->where('absents_id' , $absent_id)->select('absents_id')->get();

        $absentResources = collect();

        foreach ($studentValidations as $studentValidate){
            $absent = Absents::query()->find($studentValidate->absents_id);
            if ($absent){
                $absentResource = new AbsentResources($absent);
                $absentResources->push($absentResource);
            }
        }

        return response()->json($absentResources);
    }

    public function studentAbsentStatus($student_id, $status)
    {
        $studentValidations = DB::table('pivot_students_to_absents')
            ->where('student_id', $student_id)
            ->select('absents_id')
            ->get();

        $absentResources = collect();

        foreach ($studentValidations as $studentValidation) {
            $absent = Absents::query()
                ->where('id', $studentValidation->absents_id)
                ->where('status', $status)
                ->first();

            if ($absent) {
                $absentResource = new AbsentResources($absent);
                $absentResources->push($absentResource);
            }
        }

        return response()->json($absentResources);
    }

    public function absentCreatedByStudent($student_id ){
        $absent = AbsentResources::collection(
            Absents::query()->where('teacher_id' , $student_id)->get()
        );
        return response()->json($absent);
    }

    public function show($id){
        $absent = AbsentResources::collection(
            Absents::query()->where('id' , $id)->get()
        );
        return response()->json($absent);
    }

    public function create(Request $request , $user_id){

        $title = $request->query('title');
        $starttime = $request->query('starttime');
        $endtime = $request->query('endtime');
        $date = $request->query('date');
        $classes_id = $request->query('classesId');
        $vocation_id = $request->query('vocationId');

        $validateAbsent = Absents::query()->where('title' , $title)->where('teacher_id' , $user_id)->first();

        if ($validateAbsent){
            $error = "tittle cannot be same";
            return response()->json($error);
        } else {
            Absents::query()->create([
               'title' => $title,
               'starttime' => $starttime,
                'endtime' => $endtime,
               'date' => $date,
                'teacher_id' => $user_id,
                'classes_id' => $classes_id,
                'vocation_id' => $vocation_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            return "Successfully create Absent";
        }

    }

    public function update(Request $request , $user_id , $id ){
        $title = $request->query('title');
        $starttime = $request->query('starttime');
        $endtime = $request->query('endtime');
        $date = $request->query('date');

        $validationAbsent = Absents::query()->where('teacher_id' , $user_id)->where('id' , $id)->first();

        if (!$validationAbsent){
            $error = "id is not same";
            return response()->json($error);
        } else {
            Absents::query()->update([
               'title' => $title,
                'starttime' => $starttime,
                'endtime' => $endtime,
                'date' => $date,
            ]);
            return "successfully update absent";
        }

    }

    public function delete($user_id , $id ){
        $absentValidate = Absents::query()->where('teacher_id' , $user_id)->where('id' , $id)->first();
        if (!$absentValidate){
            $error = "absent not found or you already delete";
            return response()->json($error);
        } else{
            $absentValidate->delete();
            return "successfully delete";
        }
    }

    public function absents(Request $request, $user_id, $absent_id)
    {
        $action = $request->query('action');
        $password = $request->query('password');

        $absentTime = Carbon::now();
        $startTime = Carbon::parse(Absents::query()->where('id', $absent_id)->value('starttime'));
        $endTime = Carbon::parse(Absents::query()->where('id', $absent_id)->value('endtime'));

        if ($absentTime->between($startTime, $endTime)) {
            $user = User::query()->where('id', $user_id)->first();

//            return "berhasil";
//            $checkPassword = Hash::check($password, $user->password);
//            dd($checkPassword);

            if (Hash::check($password, $user->password)) {
                if ($action === "ijin") {
                    $reason = $request->query('reason');

                    DB::table('pivot_students_to_absents')->insert([
                        'student_id' => $user_id,
                        'absent_id' => $absent_id,
                        'action' => $action,
                        'reason' => $reason,
                        'absent_time' => Carbon::now(),
                        'created_at' => Carbon::now(),
                    ]);

                    return "Berhasil absen dengan action ijin dan alasan " . $reason;
                } else if ($action === "hadir") {
                    DB::table('pivot_students_to_absents')->insert([
                        'student_id' => $user_id,
                        'absent_id' => $absent_id,
                        'action' => $action,
                        'absent_time' => Carbon::now(),
                        'created_at' => Carbon::now(),
                    ]);

                    return "Berhasil absen dengan action hadir";
                }
            }
        } else {
            $error = "Maaf, tetapi waktu berlangsungnya absen sudah selesai";
            return $error;
        }
    }

}
