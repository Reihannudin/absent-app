<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
            "student_name" => $this->student->name,
            "absent_name" => $this->absent->title,
            "action" => $this->action,
            "reason" => $this->reason,
            "status" => $this->confirmation,
            "absent_time" => $this->absent_time,
            "on_time" => $this->ontime,
            "absent_starttime" => $this->absent->starttime,
            "absent_endtime" => $this->absent->endtime,
            "absent_date" => $this->absent->date,
            "class_name" => $this->classes->name,
            "vocation" => $this->vocation->name,
            "teacher" => $this->teacher->name,
        ];
    }
}
