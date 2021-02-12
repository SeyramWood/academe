<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Traits\ManageCourse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    use ManageCourse;
    public function addNewCourse(Request $request)
    {
        return $this->createCourse($request);
    }
    public function editCourse(Request $request)
    {
        return $this->updateCourse($request);
    }
    public function deleteCourse(Course $course)
    {
        return $this->destroyCourse($course);
    }
    public function deleteCourses($courses)
    {
        return $this->destroyCourses($courses);
    }
    public function getCourses($key)
    {
        return $this->searchCourses($key);
    }
}
