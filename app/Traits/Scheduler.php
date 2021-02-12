<?php

namespace App\Traits;

use App\Models\GeneralSchedule;
use App\Models\ServiceSchedule;
use App\Models\VisitationSchedule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

trait Scheduler
{
    public function addNewGeneralSchedule($request)
    {
        // dd($request->all());
        $rules = [
            'title' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        if ($request->image !== 'null') {
            $rules['image'] = 'required|file|mimes:jpeg,jpg,png|max:20000';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            return GeneralSchedule::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'image' => $request->image === 'null' ? null : $this->processEventPhoto($request),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
        } else {
            return GeneralSchedule::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'image' => $request->image === 'null' ? null : $this->processEventPhoto($request),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,

            ]);
        }
    }
    public function editGeneralSchedule($oldRecord, $request)
    {
        // dd($request->all());
        $rules = [
            'title' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        if ($request->image !== 'null') {
            $rules['image'] = 'required|file|mimes:jpeg,jpg,png|max:20000';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            GeneralSchedule::where('id', $oldRecord->id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'image' => $request->image === 'null' ? $oldRecord->image === null ? null : $oldRecord->image : $this->processEventPhoto($request),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
            return GeneralSchedule::find($oldRecord->id);
        } else {
            GeneralSchedule::where('id', $oldRecord->id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'image' => $request->image === 'null' ? $oldRecord->image === null ? null : $oldRecord->image : $this->processEventPhoto($request),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,

            ]);
            return GeneralSchedule::find($oldRecord->id);
        }
    }
    public function addNewServiceSchedule($request)
    {
        // dd($request->all());
        $rules = [
            'service' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            return ServiceSchedule::create([
                'name' => $request->service,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
        } else {
            return ServiceSchedule::create([
                'name' => $request->service,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,

            ]);
        }
    }
    public function editServiceSchedule($oldRecord, $request)
    {
        // dd($request->all());
        $rules = [
            'service' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            ServiceSchedule::where('id', $oldRecord->id)->update([
                'name' => $request->service,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
            return ServiceSchedule::find($oldRecord->id);
        } else {
            ServiceSchedule::where('id', $oldRecord->id)->update([
                'name' => $request->service,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,

            ]);
            return ServiceSchedule::find($oldRecord->id);
        }
    }
    public function addNewVisitationSchedule($request)
    {
        // dd($request->all());
        $rules = [
            'title' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            return VisitationSchedule::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
        } else {
            return VisitationSchedule::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,

            ]);
        }
    }
    public function editVisitationSchedule($oldRecord, $request)
    {
        // dd($request->all());
        $rules = [
            'title' => 'required|string',
            'startDate' => 'required',
            'startTime' => 'required|string',
            'finishTime' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|sometimes|string',
        ];
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            $rules['repeat'] = 'required|string';
            $rules['until'] = 'required|string';
        }
        Validator::make($request->all(), $rules)->validate();
        if (array_key_exists('repeat', $request->all()) && array_key_exists('until', $request->all())) {
            VisitationSchedule::where('id', $oldRecord->id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
                'until' => $request->until,
                'event_repeat' => $request->repeat,
            ]);
            return VisitationSchedule::find($oldRecord->id);
        } else {
            VisitationSchedule::where('id', $oldRecord->id)->update([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'event_dates' => json_encode(json_decode($request->events)),
                'color' => $request->color,
                'status' => $request->status,
                'start' => $request->startDate,
            ]);
            return VisitationSchedule::find($oldRecord->id);
        }
    }
    protected function processEventPhoto($request)
    {
        $fileName = $request->file('image')->getClientOriginalName();
        if (!Storage::disk('public')->exists("event/schedule/{$request->file('image')}")) {
            Storage::putFileAs('public/event/schedule/', $request->file('image'), $fileName);
        }
        return $fileName;
    }
}