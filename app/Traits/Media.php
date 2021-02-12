<?php

namespace App\Traits;

use App\Models\Sermon;
use App\Models\Gallery;
use App\Models\Podcast;
use App\Models\SermonCategory;
use App\Models\GalleryCategory;
use App\Models\PodcastCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

trait Media
{
  use PasswordMembershipIdGenerator;

  public function createSermonCategory($request)
  {
    //dd($request->all());
    Validator::make($request->all(), [
      'category' => 'required|string',
    ])->validate();
    $result = SermonCategory::create($request->all());
    return $result;
  }

  public function createSermon($request)
  {
    // dd($request->all());
    $rules = [
      'category' => 'required',
      'date' => 'required|string',
      'time' => 'required|string',
      'preacher' => 'required|string',
      'preacherPhoto' => 'nullable',
      'scriptures*' => 'nullable',
      'title' => 'required|string',
      'sermon' => 'required|string',
    ];
    if ($request->preacherPhoto !== 'null') {
      $rules['preacherPhoto'] = 'required|file|mimes:jpeg,jpg,png|max:20000';
    }
    if ($request->scriptures) {
      $rules['scriptures*'] = 'required|string';
    }
    Validator::make($request->all(), $rules)->validate();
    $result = Sermon::create([
      'cat_id' => $request->category,
      'title' => $request->title,
      'sermon' => $request->sermon,
      'scriptures' => $request->scriptures,
      'event_date' => $request->date,
      'preacher' => $request->preacher,
      'preacher_avatar' => $request->preacherPhoto === 'null' ? null : $this->processPreacherAvatar($request),
    ]);
    if ($result) {
      $sermon =  DB::table('sermons')
        ->where('sermons.id', '=', $result->id)
        ->join('sermon_categories', 'sermon_categories.id', '=', 'sermons.cat_id')
        ->select(
          'sermons.*',
          'sermon_categories.category',
        )->first();
      return response()->json(['sermon' => $sermon]);
    }
  }

  public function createGalleryCategory($request)
  {
    //dd($request->all());
    Validator::make($request->all(), [
      'category' => 'required|string',
    ])->validate();
    return GalleryCategory::create($request->all());
  }
  public function createGallery($request)
  {
    $photos = $this->processGalleryPhotos($request);
    $result = Gallery::create([
      'cat_id' => $request->category,
      'title' => $request->title,
      'event' => $request->event,
      'photos' => $photos,
    ]);
    if ($result) {
      $gallery = DB::table('galleries')
        ->where('galleries.id', '=', $result->id)
        ->join('gallery_categories', 'gallery_categories.id', '=', 'galleries.cat_id')
        ->select(
          'galleries.*',
          'gallery_categories.category',
        )->first();
      return response()->json(['gallery' => $gallery]);
    }
  }

  public function createPodcastCategory($request)
  {
    //dd($request->all());
    Validator::make($request->all(), [
      'category' => 'required|string',
    ])->validate();
    return PodcastCategory::create($request->all());
  }
  public function createPodcast($request)
  {
    // dd($request->all());
    if ($request->has('create')) {
      Validator::make($request->all(), [
        'title' => 'required|string',
        'category' => 'required|integer',
        'description' => 'nullable|required|string',
        'audioFile' => 'required|string',
      ])->validate();
      if ($this->writeAudioFile($request->audioFile)) {
        $created = Podcast::create([
          'title' => $request->title,
          'cat_id' => $request->category,
          'description' => $request->description,
          'file' => $request->audioFile,
        ]);
        if ($created) {
          $result = DB::table('podcasts')
            ->where('podcasts.id', '=', $created->id)
            ->join('podcast_categories', 'podcast_categories.id', '=', 'podcasts.cat_id')
            ->select(
              'podcasts.*',
              'podcast_categories.category',
            )
            ->orderBy('id', 'desc')
            ->first();
          return response()->json(['podcast' => $result]);
        }
        return Podcast::find($created->id);
      }
    } else {
      $file = $request->file('file');
      $path = Storage::path("chunks/{$file->getClientOriginalName()}");
      $name = basename($path, '.part');
      if (!Storage::disk('public')->exists("audios/main_files/{$name}")) {
        File::append($path, $file->get());
        if (
          $request->has('is_last') && $request->boolean('is_last')
        ) {
          $name = basename($path, '.part');
          Storage::move("chunks/{$name}.part", "public/audios/temp_files/{$name}");
          Storage::disk('local')->delete("chunks/{$name}.part");
          return response()->json(['uploaded' => true]);
        }
      } else {
        return response()->json(['exist' => true]);
      }
    }
  }

  public function manageSingleSermon($sermon, $action)
  {
    if ($action === 'delete') {
      if ($this->deleteSermonPhoto($sermon->preacher_avatar)) {
        $sermon->delete();
      }
    } else {
      return Sermon::where('id', $sermon->id)->update([
        'status' => $action
      ]);
    }
  }
  public function manageMultipleSermon($request)
  {
    if ($request->action === 'delete') {
      for ($i = 0; $i < count($request->ids); $i++) {
        Sermon::where('id', $request->ids[$i])->delete();
      }
    } else {
      for ($i = 0; $i < count($request->ids); $i++) {
        Sermon::where('id', $request->ids[$i])->update([
          'status' => $request->action
        ]);
      }
    }
  }
  public function manageSingleGallery($gallery, $action)
  {
    if ($action === 'delete') {
      if ($this->deleteGalleryPhotos($gallery->photos)) {
        $gallery->delete();
      }
    } else {
      return Gallery::where('id', $gallery->id)->update([
        'status' => $action
      ]);
    }
  }
  public function manageMultipleGallery($request)
  {
    if ($request->action === 'delete') {
      for ($i = 0; $i < count($request->ids); $i++) {
        $gallery = Gallery::find($request->ids[$i]);
        if ($this->deleteGalleryPhotos($gallery->photos)) {
          Gallery::where('id', $request->ids[$i])->delete();
        }
      }
    } else {
      for ($i = 0; $i < count($request->ids); $i++) {
        Gallery::where('id', $request->ids[$i])->update([
          'status' => $request->action
        ]);
      }
    }
  }
  public function manageSinglePodcast($podcast, $action)
  {
    if ($action === 'delete') {
      if ($this->deletePocastFile($podcast->file)) {
        $podcast->delete();
      }
    } else {
      return Podcast::where('id', $podcast->id)->update([
        'status' => $action
      ]);
    }
  }
  public function manageMultiplePodcast($request)
  {
    if ($request->action === 'delete') {
      for ($i = 0; $i < count($request->ids); $i++) {
        $podcast = Podcast::find($request->ids[$i]);
        if ($this->deletePocastFile($podcast->file)) {
          Podcast::where('id', $request->ids[$i])->delete();
        }
      }
    } else {
      for ($i = 0; $i < count($request->ids); $i++) {
        Podcast::where('id', $request->ids[$i])->update([
          'status' => $request->action
        ]);
      }
    }
  }



  public function fetchSermons($catId)
  {
    if ($catId) {
      return DB::table('sermons')
        ->where('sermons.cat_id', '=', $catId)
        ->join('sermon_categories', 'sermon_categories.id', '=', 'sermons.cat_id')
        ->select(
          'sermons.*',
          'sermon_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('sermons')
        ->join('sermon_categories', 'sermon_categories.id', '=', 'sermons.cat_id')
        ->select(
          'sermons.*',
          'sermon_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }
  public function fetchSermonsFrontEnd($catId)
  {
    if ($catId) {
      return DB::table('sermons')
        ->where('sermons.cat_id', '=', $catId)
        ->where('sermons.status', '=', 'Published')
        ->join('sermon_categories', 'sermon_categories.id', '=', 'sermons.cat_id')
        ->select(
          'sermons.*',
          'sermon_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('sermons')
        ->where('sermons.status', '=', 'Published')
        ->join('sermon_categories', 'sermon_categories.id', '=', 'sermons.cat_id')
        ->select(
          'sermons.*',
          'sermon_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }
  public function fetchGalleries($catId)
  {
    if ($catId) {
      return DB::table('galleries')
        ->where('galleries.cat_id', '=', $catId)
        ->join('gallery_categories', 'gallery_categories.id', '=', 'galleries.cat_id')
        ->select(
          'galleries.*',
          'gallery_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('galleries')
        ->join('gallery_categories', 'gallery_categories.id', '=', 'galleries.cat_id')
        ->select(
          'galleries.*',
          'gallery_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }
  public function fetchFrontendGalleries($catId)
  {
    if ($catId) {
      return DB::table('galleries')
        ->where('galleries.cat_id', '=', $catId)
        ->where('galleries.status', '=', 'Published')
        ->join('gallery_categories', 'gallery_categories.id', '=', 'galleries.cat_id')
        ->select(
          'galleries.*',
          'gallery_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('galleries')
        ->where('galleries.status', '=', 'Published')
        ->join('gallery_categories', 'gallery_categories.id', '=', 'galleries.cat_id')
        ->select(
          'galleries.*',
          'gallery_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }
  public function fetchPodcast($catId)
  {
    if ($catId) {
      return DB::table('podcasts')
        ->where('podcasts.cat_id', '=', $catId)
        ->join('podcast_categories', 'podcast_categories.id', '=', 'podcasts.cat_id')
        ->select(
          'podcasts.*',
          'podcast_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('podcasts')
        ->join('podcast_categories', 'podcast_categories.id', '=', 'podcasts.cat_id')
        ->select(
          'podcasts.*',
          'podcast_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }
  public function fetchFrontEndPodcast($catId)
  {
    if ($catId) {
      return DB::table('podcasts')
        ->where('podcasts.cat_id', '=', $catId)
        ->where('podcasts.status', '=', 'Published')
        ->join('podcast_categories', 'podcast_categories.id', '=', 'podcasts.cat_id')
        ->select(
          'podcasts.*',
          'podcast_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    } else {
      return DB::table('podcasts')
        ->where('podcasts.status', '=', 'Published')
        ->join('podcast_categories', 'podcast_categories.id', '=', 'podcasts.cat_id')
        ->select(
          'podcasts.*',
          'podcast_categories.category',
        )
        ->orderBy('id', 'desc')
        ->get();
    }
  }

  protected function processPreacherAvatar($request)
  {
    $fileName = $request->file('preacherPhoto')->getClientOriginalName();
    if (!Storage::disk('public')->exists("sermon/{$request->file('preacherPhoto')}")) {
      Storage::putFileAs('public/sermon', $request->file('preacherPhoto'), $fileName);
    }
    return $fileName;
  }
  protected function processGalleryPhotos($request)
  {
    $result = GalleryCategory::find($request->category);
    $path = "gallery/" . strtolower($result->category) . "";
    $fullPaths = [];
    $token = $this->generateImageName(15);
    for ($p = 0; $p < count($request->photos); $p++) {
      $fileName = time() . $token . $p . '.' . $request->photos[$p]->getClientOriginalExtension();
      if (!Storage::disk('public')->exists("{$path}/{$request->photos[$p]}")) {
        Storage::putFileAs("public/{$path}", $request->photos[$p], $fileName);
        array_push($fullPaths, "/storage/{$path}/{$fileName}");
      }
    }
    return json_encode($fullPaths);
  }
  protected function deleteGalleryPhotos($photos)
  {
    $patten = "/\gallery.+/";
    $photosArr = json_decode($photos);
    for ($p = 0; $p < count($photosArr); $p++) {
      if (preg_match($patten, $photosArr[$p], $match)) {
        if (Storage::disk('public')->exists($match[0])) {
          Storage::disk('public')->delete($match[0]);
        }
      }
    }
    return true;
  }
  protected function writeAudioFile($file)
  {
    if (Storage::disk('public')->exists("audios/temp_files/{$file}")) {

      if (!Storage::disk('public')->exists("audios/main_files/{$file}")) {
        Storage::copy("public/audios/temp_files/{$file}", "public/audios/main_files/{$file}");
      } else {
        Storage::disk('public')->delete("audios/main_files/{$file}");
        Storage::copy("public/audios/temp_files/{$file}", "public/audios/main_files/{$file}");
      }
      Storage::disk('public')->delete("audios/temp_files/{$file}");
      return true;
    }
    return false;
  }
  protected function deletePocastFile($file)
  {
    if (Storage::disk('public')->exists("audios/main_files/{$file}")) {
      Storage::disk('public')->delete("audios/main_files/{$file}");
    }
    return true;
  }
  protected function deleteSermonPhoto($file)
  {
    if (Storage::disk('public')->exists("sermon/{$file}")) {
      Storage::disk('public')->delete("sermon/{$file}");
    }
    return true;
  }
}
