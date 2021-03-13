<?php

namespace App\Traits;

use SplFileInfo;
use App\Models\Course;
use App\Models\Lecture;
use App\Models\Lecturer;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use phpDocumentor\Reflection\Location;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

/**
 * Lecture
 */
trait ManageLecture
{
  public function createLecture($request)
  {
    $documents = $request->documents ? $this->processLectureDocuments($request) : null;
    $video =  $this->processLectureVideo($request);
    Lecture::create([
      'lecturer_id' => Auth::guard(Lecturer::Guard)->id(),
      'course_id' => $request->course,
      'title' => $request->title,
      'video' => $video,
      'documents' => $documents,
      'slug' => Str::slug(Str::lower($request->title), '-'),
    ]);
    return redirect(route('manage.lectures'));
  }



  protected function processLectureDocuments($request)
  {
    $course  = Course::find($request->course);
    $documents = $request->documents;
    $data = [];
    for ($i = 0; $i < count($documents); $i++) {
      $fileName = $course->code . time() . $i . '.' . $documents[$i]->getClientOriginalExtension();
      if (!Storage::disk('public')->exists("lecture_documents/{$documents[$i]}")) {
        Storage::putFileAs("public/lecture_documents", $documents[$i], $fileName);
        array_push($data, "/storage/lecture_documents/{$fileName}");
      }
    }
    return json_encode($data);
  }
  protected function processLectureVideo($request)
  {
    $file = null;
    if (Storage::disk('public')->exists("lectures/{$request->video}")) {
      $path = Storage::path("public/lectures/{$request->video}");
      $ext  = (new SplFileInfo($path))->getExtension();
      $file = "{$request->title}.{$ext}";
      Storage::move("public/lectures/{$request->video}", "public/lectures/{$file}");
    }
    return $file;
  }

  public function getLectures()
  {

    return Lecture::join('courses', 'courses.id', '=', 'lectures.course_id')
      ->orderBy('id', 'desc')
      ->select('lectures.*', 'courses.title as course')
      ->get();
  }
  public function getRelatedLectures($id)
  {

    return Lecture::where('lectures.course_id', $id)
      ->join('courses', 'courses.id', '=', 'lectures.course_id')
      ->select('lectures.*', 'courses.title as course')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function lecturerRelatedLectures($id)
  {

    return Lecture::where('lectures.course_id', $id)
      ->where('lectures.lecturer_id', Auth::guard(Lecturer::Guard)->id())
      ->join('courses', 'courses.id', '=', 'lectures.course_id')
      ->select('lectures.*', 'courses.title as course')
      ->orderBy('id', 'desc')
      ->get();
  }
  public function lecturerRelatedCourse()
  {
    return Lecture::where('lectures.lecturer_id', Auth::guard(Lecturer::Guard)->id())
      ->join('courses', 'courses.id', '=', 'lectures.course_id')
      ->select('courses.*')
      ->orderBy('id', 'desc')
      ->get();
  }
}
