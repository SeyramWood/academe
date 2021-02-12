<?php

namespace App\Traits;

use App\Models\Role;
use App\Models\User;
use App\Models\Leadership;
use App\Models\ContactProfile;
use App\Models\MinistryProfile;
use App\Models\PersonalProfile;
use App\Events\AccountConfirmed;
use App\Models\MembershipProfile;
use App\Models\AcademicJobProfile;
use Illuminate\Support\Facades\DB;
use App\Models\TemporaryMembership;
use App\Models\EmergencyContactProfile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


trait MembershipManager
{
    public function fetchAllMembers()
    {
        return DB::table('users')
            ->join('personal_profiles', 'users.id', '=', 'personal_profiles.user_id')
            ->join('contact_profiles', 'users.id', '=', 'contact_profiles.user_id')
            ->join('membership_profiles', 'users.id', '=', 'membership_profiles.user_id')
            ->join('ministry_profiles', 'users.id', '=', 'ministry_profiles.user_id')
            ->join('academic_job_profiles', 'users.id', '=', 'academic_job_profiles.user_id')
            ->leftJoin('leaderships', 'users.id', '=', 'leaderships.user_id')
            ->select(
                'users.*',
                'personal_profiles.*',
                'contact_profiles.*',
                'membership_profiles.*',
                'ministry_profiles.*',
                'academic_job_profiles.*',
                'leaderships.department as l_departments',
                'leaderships.group as l_groups',
                'leaderships.sunday_school_class as l_class',
                'leaderships.home_cell as l_cell',
            )
            ->get();
    }
    public function searchAllMembers($searchTerm)
    {
        if ($searchTerm !== null) {
            return PersonalProfile::whereLike(['title', 'surname', 'first_name', 'other_name'], $searchTerm)
                ->join('contact_profiles', 'personal_profiles.user_id', '=', 'contact_profiles.user_id')
                ->join('membership_profiles', 'personal_profiles.user_id', '=', 'membership_profiles.user_id')
                ->join('ministry_profiles', 'personal_profiles.user_id', '=', 'ministry_profiles.user_id')
                ->join('academic_job_profiles', 'personal_profiles.user_id', '=', 'academic_job_profiles.user_id')
                ->leftJoin('leaderships', 'personal_profiles.user_id', '=', 'leaderships.user_id')
                ->select(
                    'personal_profiles.*',
                    'contact_profiles.*',
                    'membership_profiles.*',
                    'ministry_profiles.*',
                    'academic_job_profiles.*',
                    'leaderships.department as l_departments',
                    'leaderships.group as l_groups',
                    'leaderships.sunday_school_class as l_class',
                    'leaderships.home_cell as l_cell',
                )
                ->get();
        }
        return  [];
    }
    public function fetchAllVisitingMembers()
    {
        return TemporaryMembership::all();
    }
    public function searchVisitingMembers($searchTerm)
    {
        if ($searchTerm !== null) {
            return TemporaryMembership::whereLike(['title', 'surname', 'first_name', 'other_name'], $searchTerm)->get();
        }
        return  [];
    }
    public function fetchMemberProfile($id)
    {
        return DB::table('users')->where('users.id', $id)
            ->join('personal_profiles', 'users.id', '=', 'personal_profiles.user_id')
            ->join('contact_profiles', 'users.id', '=', 'contact_profiles.user_id')
            ->join('membership_profiles', 'users.id', '=', 'membership_profiles.user_id')
            ->join('ministry_profiles', 'users.id', '=', 'ministry_profiles.user_id')
            ->join('academic_job_profiles', 'users.id', '=', 'academic_job_profiles.user_id')
            ->leftJoin('leaderships', 'users.id', '=', 'leaderships.user_id')
            ->select(
                'users.*',
                'personal_profiles.*',
                'contact_profiles.*',
                'membership_profiles.*',
                'ministry_profiles.*',
                'academic_job_profiles.*',
                'leaderships.department as l_departments',
                'leaderships.group as l_groups',
                'leaderships.sunday_school_class as l_class',
                'leaderships.home_cell as l_cell',
            )
            ->first();
    }
    public function fetchMemberEmergencyContact($id)
    {
        return EmergencyContactProfile::where('user_id', $id)->get();
    }
    public function fetchMemberContact($id)
    {
        return ContactProfile::where('user_id', $id)->get();
    }
    public function fetchMemberLeadership($id)
    {
        return Leadership::where('user_id', $id)->get();
    }

    public function uploadMemberProfilePhoto($request, $id)
    {
        // dd($request->all());
        Validator::make($request->all(), [
            "profilePhoto" => 'required|file|mimes:jpeg,jpg,png|max:20000'
        ])->validate();
        $photo = $this->processAvatar($request, $id);
        PersonalProfile::where('user_id', $id)->update([
            'member_avatar' => $photo,
        ]);
    }
    public function updateMemberMinistryDepartmentProfile($request, $id)
    {
        Validator::make($request->all(), [
            "departments*" => 'required|numeric'
        ])->validate();
        MinistryProfile::where('user_id', $id)->update([
            'departments' => $request->departments,
        ]);
    }
    public function updateMemberMinistryGroupProfile($request, $id)
    {
        Validator::make($request->all(), [
            "groups*" => 'required|numeric'
        ])->validate();
        MinistryProfile::where('user_id', $id)->update([
            'groups' => $request->groups,
        ]);
    }
    public function updateMemberMinistryHomeCellProfile($request, $id)
    {
        Validator::make($request->all(), [
            "homeCell" => 'nullable'
        ])->validate();
        MinistryProfile::where('user_id', $id)->update([
            'home_cell' => $request->homeCell,
        ]);
    }
    public function updateMemberMinistrySundaySchoolProfile($request, $id)
    {
        Validator::make($request->all(), [
            "sundaySchool" => 'nullable'
        ])->validate();
        MinistryProfile::where('user_id', $id)->update([
            'sunday_school_class' => $request->sundaySchool,
        ]);
    }

    public function updateMemberMinistryDepartmentPositionProfile($request, $id)
    {
        Validator::make($request->all(), [
            "departmentPositions*" => 'required|numeric'
        ])->validate();
        $checkLeadership = Leadership::where('user_id', $id)->first();
        if ($checkLeadership) {
            Leadership::where('user_id', $id)->update([
                'department' => json_encode($request->departmentPositions),
            ]);
        } else {
            Leadership::create([
                'user_id' => $id,
                'department' => json_encode($request->departmentPositions),
            ]);
        }
    }
    public function updateMemberMinistryGroupPositionProfile($request, $id)
    {
        Validator::make($request->all(), [
            "groupPositions*" => 'required|numeric'
        ])->validate();
        $checkLeadership = Leadership::where('user_id', $id)->first();
        if ($checkLeadership) {
            Leadership::where('user_id', $id)->update([
                'group' => json_encode($request->groupPositions),
            ]);
        } else {
            Leadership::create([
                'user_id' => $id,
                'group' => json_encode($request->groupPositions),
            ]);
        }
    }
    public function updateMemberMinistryHomeCellPositionProfile($request, $id)
    {
        Validator::make($request->all(), [
            "homeCellPosition" => 'nullable'
        ])->validate();
        $checkLeadership = Leadership::where('user_id', $id)->first();
        if ($checkLeadership) {
            Leadership::where('user_id', $id)->update([
                'home_cell' => $request->homeCellPosition,
            ]);
        } else {
            Leadership::create([
                'user_id' => $id,
                'home_cell' => $request->homeCellPosition,
            ]);
        }
    }
    public function updateMemberMinistrySundaySchoolPositionProfile($request, $id)
    {
        Validator::make($request->all(), [
            "sundaySchoolPosition" => 'nullable'
        ])->validate();
        $checkLeadership = Leadership::where('user_id', $id)->first();
        if ($checkLeadership) {
            Leadership::where('user_id', $id)->update([
                'sunday_school_class' => $request->sundaySchoolPosition,
            ]);
        } else {
            Leadership::create([
                'user_id' => $id,
                'sunday_school_class' => $request->sundaySchoolPosition,
            ]);
        }
    }

    public function assignVisitingMemberToMembers($request, $id)
    {
        Validator::make($request->all(), [
            "members" => 'nullable'
        ])->validate();
        TemporaryMembership::where('id', $id)->update(['members' => json_encode($request->members)]);
    }
    public function assignVisitingMemberToDepartments($request, $id)
    {
        Validator::make($request->all(), [
            "departments" => 'nullable'
        ])->validate();
        TemporaryMembership::where('id', $id)->update(['departments' => json_encode($request->departments)]);
    }
    public function assignVisitingMemberToGroups($request, $id)
    {
        Validator::make($request->all(), [
            "groups" => 'nullable'
        ])->validate();
        TemporaryMembership::where('id', $id)->update(['groups' => json_encode($request->groups)]);
    }

    public function createNewMemberRole($request)
    {
        Validator::make($request->all(), [
            "role" => 'required|string'
        ])->validate();

        $role = Role::create($request->all());
        return Role::find($role->id);
    }
    public function updateMemberRole($request, $role)
    {
        Validator::make($request->all(), [
            "role" => 'required|string'
        ])->validate();
        $role->role = $request->role;
        $role->save();
        return Role::find($role->id);
    }
    public function createNewMemberRoleUser($request, $id)
    {
        Validator::make($request->all(), [
            "member" => 'required|string'
        ])->validate();

        $role = Role::find($id);
        $member = User::find($request->id);
        $formatedmember = [
            'id' => $request->id,
            'member' => $request->member
        ];
        if ($role->members) {
            $members = json_decode($role->members);
            if ($this->checkRoleUser($members, $request->id)) {
                return response()->json(['memberExist' => true]);
            } else {
                array_push($members, $formatedmember);
                $updated =  Role::where('id', $id)->update([
                    'members' => json_encode($members)
                ]);
                if ($updated) {
                    if ($member->role) {
                        $roles = json_decode($member->role);
                        array_push($roles, (int)$id);
                        User::where('id', $request->id)->update([
                            'role' => json_encode($roles)
                        ]);
                    } else {
                        User::where('id', $request->id)->update([
                            'role' => json_encode([(int)$id])
                        ]);
                    }
                }
                return response()->json(['memberExist' => false]);
            }
        } else {

            $updated = Role::where('id', $id)->update([
                'members' => json_encode([$formatedmember])
            ]);
            if ($updated) {
                if ($member->role) {
                    $roles = json_decode($member->role);
                    array_push($roles, (int)$id);
                    User::where('id', $request->id)->update([
                        'role' => json_encode($roles)
                    ]);
                } else {
                    User::where('id', $request->id)->update([
                        'role' => json_encode([(int)$id])
                    ]);
                }
            }
            return response()->json(['memberExist' => false]);
        }
    }

    public function updateRolePermission($request, $id)
    {
        Role::where('id', $id)->update([
            'permissions' => count($request->permissions) > 0 ? json_encode($request->permissions) : null
        ]);
    }
    public function deleteMemberRoleUser($roleId, $memberId)
    {
        $role = Role::find($roleId);
        $member = User::find($memberId);
        $members = json_decode($role->members);
        $roles = json_decode($member->role);
        for ($i = 0; $i < count($members); $i++) {
            if ($members[$i]->id === (int)$memberId) {
                array_splice($members, $i, 1);
                break;
            }
        }
        for ($i = 0; $i < count($roles); $i++) {
            if ($roles[$i] === (int)$roleId) {
                array_splice($roles, $i, 1);
                break;
            }
        }
        $role->members = count($members) > 0 ? json_encode($members) : null;
        $role->save();
        $member->role = count($roles) > 0 ? json_encode($roles) : null;
        $member->save();
    }
    public function destroyRole($role)
    {
        if ($role->members) {
            if ($this->removeUserRole($role)) {
                $role->delete();
            };
        } else {
            $role->delete();
        }
    }
    public function destroyRoles($request)
    {
        for ($i = 0; $i < count($request->ids); $i++) {
            $role = Role::find($request->ids[$i]);
            if ($role->members) {
                if ($this->removeUserRole($role)) {
                    $role->delete();
                };
            } else {
                $role->delete();
            }
        }
    }
    protected function removeUserRole($role)
    {
        $roleUsers = json_decode($role->members);
        for ($i = 0; $i < count($roleUsers); $i++) {
            $user = User::find($roleUsers[$i]->id);
            $userRoles = json_decode($user->role);
            for ($idx = 0; $idx < count($userRoles); $i++) {
                if ($userRoles[$idx] === (int)$role->id) {
                    array_splice($userRoles, $idx, 1);
                    break;
                }
            }
            $user->role = count($userRoles) > 0 ? json_encode($userRoles) : null;
            $user->save();
        }
        return true;
    }
    protected function checkRoleUser($members, $id)
    {
        for ($i = 0; $i < count($members); $i++) {
            if ($members[$i]->id === (int)$id) {
                return true;
                break;
            }
        }
        return false;
    }
    protected function updateMemberStatus($user, $action)
    {
        if ($action === 'activate') {
            $user->account_status = 1;
            $user->save();
            AccountConfirmed::dispatch($user);
        }
        if ($action === 'deactivate') {
            $user->account_status = 0;
            $user->save();
        }
    }

    protected function processAvatar($request, $id)
    {
        $user = PersonalProfile::where('user_id', $id)->first();
        $fileName = strtoupper("{$user->surname}{$user->first_name}_avatar") . '_' . time() . '.' . $request->file('profilePhoto')->extension();
        if (Storage::disk('public')->exists("avatars/members/{$user->member_avatar}")) {
            Storage::disk('public')->delete("avatars/members/{$user->member_avatar}");
            Storage::putFileAs('public/avatars/members', $request->file('profilePhoto'), $fileName);
        } else {
            Storage::putFileAs('public/avatars/members', $request->file('profilePhoto'), $fileName);
        }
        return $fileName;
    }
}
