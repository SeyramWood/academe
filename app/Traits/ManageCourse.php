<?php

namespace App\Traits;

use App\Models\Course;
use App\Models\Programme;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;



trait ManageCourse
{
    public function createCourse($request)
    {

        $request->validate([
            'programme' => 'required|numeric',
            'courseTitle' => 'required|string',
            'courseCode' => 'required|string',
            'semester' => 'required|string',
            'year' => 'required|string',
        ]);

        Course::create([
            'programme_id' => $request->programme,
            'title' => $request->courseTitle,
            'code' => $request->courseCode,
            'semester' => $request->semester,
            'year' => $request->year,
        ]);

        $converted = $this->changeYearToFieldName($request->year);
        Programme::where('id', $request->programme)->increment($converted, 1);
        return redirect(route('manage.courses'));
    }
    public function updateCourse($request)
    {

        $request->validate([
            'programme' => 'required|numeric',
            'courseTitle' => 'required|string',
            'courseCode' => 'required|string',
            'semester' => 'required|string',
            'year' => 'required|string',
        ]);
        Course::where('id', $request->id)->update([
            'programme_id' => $request->programme,
            'title' => $request->courseTitle,
            'code' => $request->courseCode,
            'semester' => $request->semester,
            'year' => $request->year,
        ]);
        return redirect(route('manage.courses'));
    }
    public function destroyCourse($course)
    {
        $converted = $this->changeYearToFieldName($course->year);
        Programme::where('id', $course->programme_id)->decrement($converted);
        $course->delete();
        return redirect(route('manage.courses'));
    }
    public function destroyCourses($courses)
    {
        $courseIds = explode(',', $courses);
        for ($i = 0; $i < count($courseIds); $i++) {
            $course = Course::find($courseIds[$i])->first();
            $converted = $this->changeYearToFieldName($course->year);
            Programme::where('id', $course->programme_id)->decrement($converted);
            $course->delete();
        }
        return redirect(route('manage.courses'));
    }
    public function getCourses()
    {

        return DB::table('courses')
            ->join('programmes', 'programmes.id', '=', 'courses.programme_id')
            ->select('courses.*', 'programmes.name as programme')
            ->get();
    }
    public function searchCourses($key)
    {

        if ($key !== null) {
            if (Str::contains($key, 'Year')) {
                return Course::where('year',  $key)
                    ->join('programmes', 'programmes.id', '=', 'courses.programme_id')
                    ->select('courses.*', 'programmes.name as programme')
                    ->get();
            } else {
                return Course::where('semester', $key)
                    ->join('programmes', 'programmes.id', '=', 'courses.programme_id')
                    ->select('courses.*', 'programmes.name as programme')
                    ->get();
            }
        }
        return  [];
    }
    // public function searchCourses($key)
    // {
    //     if ($key !== null) {
    //         return Course::whereLike(['title', 'surname', 'first_name', 'other_name'], $key)
    //             ->join('programmes', 'programmes.id', '=', 'courses.programme_id')
    //             ->select('courses.*', 'programmes.name as programme')
    //             ->get();
    //     }
    //     return  [];
    // }
    public function changeYearToFieldName($year)
    {
        return strtolower(str_replace(' ', '_', $year));
    }
}
