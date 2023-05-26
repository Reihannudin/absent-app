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

        Vocations::query()->create([
            'name' => $name,
            'user_id' => $user_id,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        return redirect(env('APP_FE_URL') . '/');

    }

    public function update(Request $request , $id){

        $name = $request->query('name');
        $vocationValidate = Vocations::query()->where('id' ,$id)->first();

        if (!$vocationValidate){
            $error = "Vocation Id Not same";
            return response()->json($error);
        } else{
            $vocationValidate->update([
               'name' => $name,
            ]);
            return redirect(env('APP_FE_URL') . '/');
        }
    }

    public function delete($id){
        $vocationValidate = Vocations::query()->where('id' , $id)->first();
        if (!$vocationValidate){
            $error = "you already delete";
            return response()->json($error);
        } else{
            $vocationValidate->delete();
            return redirect(env('APP_FE_URL') . '/');
        }
    }

}
