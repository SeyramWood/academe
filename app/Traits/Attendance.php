<?php

namespace App\Traits;

use App\Models\Attendance as ModelsAttendance;
use Illuminate\Support\Facades\DB;

trait Attendance
{
  public function updateAttendance($request)
  {

    $arr = $request->attendance;
    // dd($arr);
    for ($i = 0; $i < count($arr); $i++) {
      $attendance = DB::table('attendances')
        ->where('user_id', $arr[$i]['id'])
        ->where('token', $arr[$i]['token'])
        ->first();
      if ($attendance) {
        DB::table('attendances')
          ->where('user_id', $arr[$i]['id'])
          ->where('token', $arr[$i]['token'])
          ->update([
            'user_id' => $arr[$i]['id'],
            'token' => $arr[$i]['token'],
            'token_date' => $arr[$i]['tokenDate'],
            // 'p_count' => $arr[$i]['att']['currentStatus'] === 'p' ? DB::raw("p_count + 1") : DB::raw("p_count + 0"),
            // 'a_count' => $arr[$i]['att']['currentStatus'] === 'a' ? DB::raw("a_count + 1") : DB::raw("a_count + 0"),
            'attendance' => json_encode($arr[$i]['att'])
          ]);
      } else {
        ModelsAttendance::create([
          'user_id' => $arr[$i]['id'],
          'token' => $arr[$i]['token'],
          'token_date' => $arr[$i]['tokenDate'],
          // 'p_count' => $arr[$i]['att']['currentStatus'] === 'p' ? DB::raw("p_count + 1") : DB::raw("p_count + 0"),
          // 'a_count' => $arr[$i]['att']['currentStatus'] === 'a' ? DB::raw("a_count + 1") : DB::raw("a_count + 0"),
          'attendance' => json_encode($arr[$i]['att'])
        ]);
      }
    }
    return response()->json(['save' => true]);
  }

  public function fetchAttendances($token)
  {
    return DB::table('users')
      ->leftJoin('attendances', function ($join) use ($token) {
        $join->on('users.id', '=', 'attendances.user_id')
          ->where('attendances.token', '=', $token);
      })
      ->join('personal_profiles', 'users.id', '=', 'personal_profiles.user_id')
      ->join('contact_profiles', 'users.id', '=', 'contact_profiles.user_id')
      ->select(
        'attendances.id',
        'users.id as user_id',
        'personal_profiles.title',
        'personal_profiles.surname',
        'personal_profiles.first_name',
        'contact_profiles.phone_number',
        'attendances.token',
        'attendances.token_date',
        'attendances.attendance',
      )->get();
  }
  public function fetchMemberAttendances($token, $member)
  {
    if ($token) {
      return DB::table('attendances')
        ->where('attendances.token', '=', $token)
        ->join('personal_profiles', 'attendances.user_id', '=', 'personal_profiles.user_id')
        ->join('contact_profiles', 'attendances.user_id', '=', 'contact_profiles.user_id')
        ->select(
          'attendances.id',
          'attendances.user_id',
          'personal_profiles.title',
          'personal_profiles.surname',
          'personal_profiles.first_name',
          'personal_profiles.gender',
          'personal_profiles.member_avatar',
          'attendances.token',
          'attendances.attendance',
        )->get();
    }
  }
  public function destroyAttendance($request)
  {
    for ($i = 0; $i < count($request->ids); $i++) {
      ModelsAttendance::where('id', $request->ids[$i])->delete();
    }
    return response()->json(['deleted' => true]);
  }
}
