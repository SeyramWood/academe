<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use App\Traits\ManageCourse;
use App\Traits\ManageLecture;
use App\Traits\ManageStudent;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    use ManageCourse;
    use ManageLecture;
    use ManageStudent;


    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return inertia('student/Home');
    }

    public function lectures()
    {
        return inertia('student/Lectures', [
            'courses' => $this->getCourses(),
            'programmes' => Programme::all(),
            'lecturesPerSemester' => $this->lecturesPerSemester(),
            'semesterCourses' => $this->coursesPerSemester(),
        ]);
    }
    public function courses()
    {
        return inertia('student/Courses', [
            'programmes' => Programme::all(),
            'semesterCourses' => $this->coursesPerSemester(),
        ]);
    }
    public function profile()
    {
        return inertia('student/Profile');
    }
    public function registerCourse(Request $request)
    {
        return $this->registerNewCourse($request);
    }
}
