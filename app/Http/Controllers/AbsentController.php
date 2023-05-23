<?php

namespace App\Http\Controllers;

use App\Http\Resources\AbsentResources;
use App\Models\Absents;
use App\Models\Classes;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AbsentController extends Controller
{
    public function index($user_id){
        $absent = AbsentResources::collection(
            Absents::query()->where('teacher_id' , $user_id)->get()
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
        $time = $request->query('time');
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
               'time' => $time,
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

    public function update(Request $request , $id){
        $title = $request->query('title');
        $date = $request->query('date');
        $time = $request->query('time');

        $validationAbsent = Absents::query()->where('id' , $id)->first();

        if (!$validationAbsent){
            $error = "id is not same";
            return response()->json($error);
        } else {
            Absents::query()->update([
               'title' => $title,
               'time' => $time,
                'date' => $date,
            ]);
            return "successfully update absent";
        }

    }

    public function delete($id){
        Absents::query()->where('id' , $id)->delete();
        return "successfully delete";
    }

    public function absents(Request $request , $user_id , $absent_id){

        $action = $request->query('action');
        $password = $request->query('password');

        $absentTime = Carbon::now()->format('H:i');
        $startTime = Absents::query()->where('id' , $absent_id)->select('starttime')->first();
        $endTime = Absents::query()->where('id' , $absent_id)->select('endtime')->first();

        if ($absentTime->between($startTime , $endTime)){
            $user = User::query()->where('id' , $user_id)->first();
            if (Hash::check($password , $user->password)){
                if ($action == "ijin"){
                    $reason = $request->query('reason');

                    DB::table('pivot_students_to_absents')->insert([
                        'student_id' => $user_id,
                        'absent_id' => $absent_id,
                        'action' => $action,
                        'reason' => $reason,
                        'absent_time' => Carbon::now(),
                        'created_at' => Carbon::now(),
                    ]);

                    return "berhasil absent dengan action ijin dan alasan " + $action;

                }  else if ($action == "hadir"){
                    DB::table('pivot_students_to_absents')->insert([
                        'student_id' => $user_id,
                        'absent_id' => $absent_id,
                        'action' => $action,
                        'absent_time' => Carbon::now(),
                        'created_at' => Carbon::now(),
                    ]);

                    return "berhasil absent dengan action hadir";
                }
            }
        }else{
            $error = "Maaf tetapi waktu berlangsungnya absen sudah selesai";
            return $error;
        }

    }

}
