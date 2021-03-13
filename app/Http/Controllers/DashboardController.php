<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lecture;
use App\Models\Programme;
use App\Traits\ManageCourse;
use Illuminate\Http\Request;
use App\Traits\ManageLecture;

class DashboardController extends Controller
{
    use ManageCourse;
    use ManageLecture;

    public function __construct()
    {
        $this->middleware('auth:faculty');
    }
    public function index()
    {
        return inertia('backend/Home', [
            'user' => 'Seyram'
        ]);
    }

    public function programmesAndCourses()
    {
        return inertia('backend/Programmes', [
            'courses' => $this->getCourses(),
            'programmes' => Programme::all(),
        ]);
    }
    public function manageProgrammes()
    {
        return inertia('backend/ManageProgrammes', [
            'programmes' => Programme::all(),
        ]);
    }
    public function manageCourses()
    {
        return inertia('backend/ManageCourses', [
            'courses' => $this->getCourses(),
            'programmes' => Programme::all(),
        ]);
    }
    public function manageLectures()
    {
        return inertia('backend/ManageLectures', ['lectures' => $this->getLectures(), 'courses' => $this->getCourses()]);
    }
}
