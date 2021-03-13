<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use App\Traits\ManageCourse;
use Illuminate\Http\Request;
use App\Traits\ManageLecture;
use App\Traits\ManageStudent;

class StudentVideoController extends Controller
{
    use ManageCourse;
    use ManageLecture;
    use ManageStudent;

    public function watchVideos(Lecture $lecture)
    {
        return inertia('StudentWatchVideo', [
            'lecture' => $lecture,
            'relatedLectures' => $this->relatedLectures($lecture->course_id),
            'courses' => $this->coursesPerSemester(),
        ]);
    }
}
