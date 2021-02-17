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

    public function upLoad(Request $request)
    {
        // dd($request->all());
        if ($request->has('file')) {
            $file = $request->file('file');
            $path = Storage::path("chunks/{$file->getClientOriginalName()}");
            $name = basename($path, '.part');
            if (!Storage::disk('public')->exists("lectures/main_files/{$name}")) {
                File::append($path, $file->get());
                if (
                    $request->has('is_last') && $request->boolean('is_last')
                ) {
                    $name = basename($path, '.part');
                    if (!Storage::disk('public')->exists("lectures/temp_files/{$name}")) {
                        Storage::move("chunks/{$name}.part", "public/lectures/temp_files/{$name}");
                        Storage::disk('local')->delete("chunks/{$name}.part");
                        return response()->json(['uploaded' => true]);
                    } else {
                        return response()->json(['exist' => true]);
                    }
                }
            } else {
                return response()->json(['exist' => true]);
            }
        }
    }
}
