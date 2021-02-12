<?php

namespace App\Traits;

use App\Models\Programme;
use Illuminate\Support\Facades\DB;




trait ManageProgramme
{
  public function createProgramme($request)
  {
    $request->validate([
      'programme' => 'required|string',
    ]);
    Programme::create(['name' => $request->programme]);
    return redirect(route('manage.programmes'));
  }
  public function updateProgramme($request)
  {
    $request->validate([
      'programme' => 'required|string',
    ]);
    DB::table('programmes')->where('id', $request->id)->update(['name' => $request->programme]);
    return redirect(route('manage.programmes'));
  }
  public function destroyProgrammes($programmes)
  {
    $programmeIds = explode(',', $programmes);
    for ($i = 0; $i < count($programmeIds); $i++) {
      $programme = Programme::find($programmeIds[$i])->first();
      $programme->delete();
    }
    return redirect(route('manage.programmes'));
  }
}
