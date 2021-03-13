<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Course;
use App\Models\Lecture;
use Illuminate\Support\Facades\Auth;

/**
 * ManageStudent
 */
trait ManageStudent
{
  public function registerNewCourse($request)
  {
    $request->validate([
      'programme' => 'required|numeric',
      'semester' => 'required|string',
      'year' => 'required|string',
    ]);

    User::where('id', Auth::id())->update([
      'programme_id' => $request->programme,
      'semester' => $request->semester,
      'year' => $request->year,
    ]);
    return redirect(route('student.courses'));
  }

  public function coursesPerSemester()
  {
    return Course::where('programme_id', Auth::user()->programme_id)
      ->where('semester', Auth::user()->semester)
      ->get();
  }
  public function relatedLectures($id)
  {

    return Lecture::where('lectures.course_id', $id)
      ->join('courses', 'courses.id', '=', 'lectures.course_id')
      ->select('lectures.*', 'courses.title as course')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function lecturesPerSemester()
  {
    return Course::where('programme_id', Auth::user()->programme_id)
      ->where('semester', Auth::user()->semester)
      ->join('lectures', 'lectures.course_id', '=', 'courses.id')
      ->join('lecturers', 'lecturers.id', '=', 'lectures.lecturer_id')
      ->select(
        'courses.title as course',
        'courses.semester',
        'courses.year',
        'lectures.*',
        'lecturers.email',
        'lecturers.surname',
        'lecturers.middle_name',
        'lecturers.other_name',
        'lecturers.phone',
        'lecturers.gender',
        'lecturers.avatar',
      )
      ->orderBy('id', 'desc')
      ->get();
  }
}
