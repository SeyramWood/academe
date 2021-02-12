<?php

namespace App\Traits;

use Illuminate\Support\Facades\Gate;

trait Permission
{
  public function getUesrPermissions()
  {
    return [
      'create' => Gate::allows('create'),
      'read' => Gate::allows('read'),
      'update' => Gate::allows('update'),
      'delete' => Gate::allows('delete'),
    ];
  }
}
