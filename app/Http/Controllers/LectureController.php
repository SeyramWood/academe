<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLectureRequest;
use Illuminate\Http\Request;
use App\Traits\ManageLecture;

class LectureController extends Controller
{
    use ManageLecture;
    public function addNewLecture(CreateLectureRequest $createLectureRequest)
    {
        return $this->createLecture($createLectureRequest);
    }
}
