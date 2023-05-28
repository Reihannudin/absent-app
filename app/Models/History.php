<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function student(){
        return $this->belongsTo(User::class);
    }

    public function teacher(){
        return $this->belongsTo(User::class);
    }

    public function absent(){
        return $this->belongsTo(Absents::class);
    }

    public function classes(){
        return $this->belongsTo(Classes::class);
    }

    public function vocation(){
        return $this->belongsTo(Vocations::class);
    }


}
