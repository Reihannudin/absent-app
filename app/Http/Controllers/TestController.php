<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class TestController extends Controller
{
    function validateTimeAbsent($timeAbsent, $timeRange) {
        try {
            $absentTime = Carbon::createFromFormat('H:i', $timeAbsent);
            $startTime = Carbon::createFromFormat('H:i', $timeRange[0]);
            $endTime = Carbon::createFromFormat('H:i', $timeRange[1]);

            return $absentTime->between($startTime, $endTime);
        } catch (\Exception $e) {
            return false;
        }
    }

}
