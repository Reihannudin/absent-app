<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AbsentResources extends JsonResource
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
            "title" => $this->title,
            "start_time" => $this->starttime,
            "end_time" => $this->endtime,
            "due_date" => $this->date,
            "teacher" => $this->teacher->name,
            "class" => $this->classes->name,
            "vocation" => $this->vocation->name,
//            "students" => [
//                $this->students
//            ],
        ];
    }
}
