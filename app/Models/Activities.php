<?php

namespace App\Models;

use App\Http\Resources\ClassResources;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Activities extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function absent(){
        return $this->belongsToMany(Absents::class , 'pivot_user_activity' );
    }

    public function teacher(){
        return $this->belongsTo(User::class);
    }
    public function vocation(){
        return $this->belongsTo(Vocations::class);
    }

    public function classes()
    {
        return $this->belongsToMany(Classes::class , 'pivot_user_activity');
    }

    public function history(){
        return $this->belongsToMany(History::class, 'pivot_user_activity');
    }

}
