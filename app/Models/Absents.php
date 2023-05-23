<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absents extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function teacher(){
        return $this->belongsTo(User::class);
    }

    public function classes(){
        return $this->belongsTo(Classes::class);
    }

    public function vocation(){
        return $this->belongsTo(Vocations::class);
    }

}
