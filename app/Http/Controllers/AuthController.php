<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use http\Client\Curl\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;

class AuthController extends Controller
{
    public function login(Request $request){
        $email = $request->query('email');
        $password = $request->query('password');

        $user = \App\Models\User::query()->where('email' , $email)->first();

        if (Hash::check($password , $user->password)){
            $token = $user->createToken('API Token of ' . $user->email)->plainTextToken;
            \App\Models\User::query()->where('email' , '=' , $user->email)->update(['remember_token' => $token]);
            $user_res = new UserResource($user);
            $user_enc = json_encode($user_res);
            return response()->json($user_enc);
        } else {
            $error = "password incorrect";
            return response()->json($error);
        }
    }

    public function signUp(Request $request){

        $email = $request->query('email');

        $alread_register = \App\Models\User::query()->where('email' , '=' , $email)->first();

        if ($alread_register){
            $error = "Email already registered";
            return response()->json($error);
        }else {
            \App\Models\User::query()->create([
                'email' => $email
            ]);
            return "successfully signUp";
        }

    }

    public function addInformation(Request  $request , $email){
        $name = $request->query('name');

        $userEmail = \App\Models\User::query()->where('email' , $email)->first();

        if (!$userEmail){
            $error = "Email not same";
            return response()->json($error);
        }else {
            $userEmail->update([
               'name' => $name
            ]);
            return "successfully add information";
        }
    }

    public function savePassword(Request $request , $email){

        $password = $request->query('password');
        $user = \App\Models\User::query()->where('email' , $email)->first();

        if (is_null($password)){
            $error = "Please fill the password";
            return response()->json($error);
        } else{
            $user->update([
                'password' => $request->query('password'),
            ]);

            $token = $user->createToken('token-name')->plainTextToken;

            \App\Models\User::query()->where('email' , $user->email)->update(['remember_token' => $token]);
            $user_res = new UserResource($user);

            $user_enc = json_encode($user_res);

            return "you successfully add password";

        }
    }

    public function logout(){
        $user = Auth::user();
        \App\Models\User::query()->where('id' , $user->id)->update([
            'remember_token' => null
        ]);

        $token = \App\Models\User::query()->where('id' , $user->id)->value('remember_token');
        $tokenStr = $token === null ? 'null' : null;

        $login = "false";

        return "success logout";
    }

}
