<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function teacher(){
        return $this->belongsTo(User::class);
    }

    public function vocation(){
        return $this->belongsTo(Vocations::class);
    }

    public function student(){
        return $this->belongsToMany(User::class , 'pivot_students_to_classes' , 'class_id' , 'student_id');
    }

    public function absent(){
        return $this->hasMany(Absents::class);
    }



}
