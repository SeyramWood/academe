<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class VideoUploadController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:faculty');
    }
    public function upLoad(Request $request, $location)
    {
        if ($request->has('file')) {
            $file = $request->file('file');
            $path = Storage::path("chunks/{$file->getClientOriginalName()}");
            $name = basename($path, '.part');
            if (!Storage::disk('public')->exists("{$location}/{$name}")) {
                File::append($path, $file->get());
                if (
                    $request->has('is_last') && $request->boolean('is_last')
                ) {
                    $name = basename($path, '.part');
                    if (!Storage::disk('public')->exists("{$location}/{$name}")) {
                        Storage::move("chunks/{$name}.part", "public/{$location}/{$name}");
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
