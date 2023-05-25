<?php

namespace App\Http\Controllers;

use App\Models\Vocations;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VocationController extends Controller
{
    public function index($user_id){
        $vocation = Vocations::query()->where('user_id' , $user_id)->get();
        return response()->json($vocation);
    }

    public function create(Request $request , $user_id){

        $name = $request->query('name');
        $vocationValidate = Vocations::query()->where('user_id' , $user_id)->first();

        if (!$vocationValidate){
            $error = "this user don't have vocation";
            return response()->json($error);
        }else{
            Vocations::query()->create([
                'name' => $name,
                'user_id' => $user_id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            return "successfully create class";
        }
    }

    public function update(Request $request , $user_id  , $vocation_id){

        $name = $request->query('name');
        $vocationValidate = Vocations::query()->where('user_id' ,$user_id)->where('id' , $vocation_id)->first();

        if (!$vocationValidate){
            $error = "Vocation Id Not same";
            return response()->json($error);
        } else{
            $vocationValidate->update([
               'name' => $name,
            ]);
            return "success update vocation";
        }
    }

    public function delete($user_id , $vocation_id){
        $vocationValidate = Vocations::query()->where('user_id' ,$user_id)->where('id' , $vocation_id)->first();
        if (!$vocationValidate){
            $error = "you already delete";
            return response()->json($error);
        } else{
            $vocationValidate->delete();
            return "successfully delete";
        }
    }

}
