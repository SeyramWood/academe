<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use Illuminate\Http\Request;
use App\Traits\ManageProgramme;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;


class ProgrammeController extends Controller
{
    use ManageProgramme;
    public function addNewProgramme(Request $request)
    {
        return $this->createProgramme($request);
    }
    public function editProgramme(Request $request)
    {
        return $this->updateProgramme($request);
    }
    public function deleteProgramme(Programme $programme)
    {
        $programme->delete();
        return redirect(route('manage.programmes'));
    }
    public function deleteProgrammes($programmes)
    {
        return $this->destroyProgrammes($programmes);
    }
    public function getProgrammes()
    {
        return Programme::all();
    }
}
