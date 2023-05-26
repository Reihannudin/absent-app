<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityRecenliesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            "id" => $this->id,
            'name' => $this->user->name,
            'absent' => $this->absent ? $this->absent->map(function ($absent) {
                return [
                    'id' => $absent->id,
                    'title' => $absent->title,
                    'starttime' => $absent->starttime,
                    'endtime' => $absent->endtime,
                    'date' => $absent->date,
                    'detail_absent' => $this->history,
                ];
            }) : null,
            'classes' => $this->classes ? $this->classes->map(function ($class) {
                return [
                    'id' => $class->id,
                    'name' => $class->name,
                    'code' => $class->code,
                ];
            }) : null,
            'vocational' => $this->vocation->name,
            'teacher' => $this->teacher->name,
            'created_at' => $this->teacher->created_at,

//            'absent_id' => $absentId,
//            'absent_name' => $this->absent ? $this->absent[0]->title : null,
//            'classes_name' => $this->classes ? $this->classes[0]->name : null,
//            'vocational_name' => $this->vocation ? $this->vocation[0]->name : null,
//            'absent_starttime' => $this->absent ? $this->absent[0]->starttime : null,
//            'absent_endtime' => $this->absent ? $this->absent[0]->endtime : null,
//            'absent_date' => $this->absent ? $this->absent[0]->date : null,

        ];
    }
}
