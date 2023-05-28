<?php

namespace App\Http\Controllers;

use App\Http\Resources\HistoryResource;
use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    public function historyAbsence($user_id){

        $absent = HistoryResource::collection(
            History::query()->where('student_id' , $user_id)->get()
        );
        return response()->json($absent);
    }

    public function historyAbsenceById($user_id , $id){

        $absent = HistoryResource::collection(
            History::query()->where('student_id' , $user_id)->where('absent_id' , $id)->get()
        );
        return response()->json($absent);
    }

}
