<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Programme;
use App\Traits\ManageCourse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use ManageCourse;
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
        return inertia('backend/ManageLectures', ['programmes' => Programme::all(),]);
    }
}
