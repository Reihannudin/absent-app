<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActivityRecenliesResource;
use App\Models\Activities;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActivityController extends Controller
{
    public function activityRecently($user_id){
        $activity = ActivityRecenliesResource::collection(
            Activities::query()->where('user_id' , $user_id)->get()
        );
        return response()->json($activity);
    }

    public function activityRecentlyById($user_id , $id){
        $activity = ActivityRecenliesResource::collection(
            Activities::query()->where('user_id' , $user_id)->where('id' , $id)->get()
        );
        return response()->json($activity);
    }


}
