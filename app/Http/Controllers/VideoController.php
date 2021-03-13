<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use App\Models\Lecturer;
use App\Traits\ManageCourse;
use Illuminate\Http\Request;
use App\Traits\ManageLecture;
use App\Traits\ManageStudent;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    use ManageCourse;
    use ManageLecture;
    use ManageStudent;

    public function watchVideos(Lecture $lecture)
    {
        return inertia('WatchVideo', [
            'lecture' => $lecture,
            'relatedLectures' => $this->lecturerRelatedLectures($lecture->course_id),
            'courses' => $this->lecturerRelatedCourse(),
        ]);
    }
    public function getLectureByCourse($id)
    {
        return response()->json(['data' => $this->getRelatedLectures($id)]);
    }
}
