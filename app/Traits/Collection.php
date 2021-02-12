<?php

namespace App\Traits;

use App\Models\Due;
use App\Models\Tithe;
use App\Models\Pledge;
use App\Models\Fundraiser;
use App\Models\MemberDues;
use App\Models\MemberDonation;
use App\Models\CampaignMessage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\PasswordMembershipIdGenerator;


trait Collection
{
    use PasswordMembershipIdGenerator;
    public function addCampaign($request)
    {
        //dd($request->all());
        Validator::make($request->all(), [
            'campaign' => 'required|string|max:150',
            'description' => 'required|string',
        ])->validate();
        $result = Fundraiser::create($request->all());
        return $result;
    }
    public function updateCampaign($request, $fundraiser)
    {
        //dd($request->all());
        Validator::make($request->all(), [
            'campaign' => 'required|string|max:150',
            'description' => 'required|string',
        ])->validate();
        $fundraiser->campaign = $request->campaign;
        $fundraiser->description = $request->description;
        $fundraiser->save();
        $result = Fundraiser::find($fundraiser->id);
        return $result;
    }
    public function addTithe($request)
    {
        //dd($request->all());
        Validator::make($request->all(), [
            'name' => 'required|string',
            'month' => 'required|string',
            'amount' => 'required|numeric',
            'channel' => 'required|string',
        ])->validate();
        return Tithe::create([
            'user_id' => $request->id,
            'name' => $request->name,
            'month' => $request->monthSelected,
            'year' => $request->yearSelected,
            'channel' => $request->channel,
            'currency' => $request->currency,
            'amount' => $request->amount,
            'signed' => $request->signed,
        ]);
    }
    public function addDuesType($request)
    {
        //dd($request->all());
        Validator::make($request->all(), [
            'duesType' => 'required|string',
        ])->validate();
        return Due::create([
            'name' => $request->duesType,
        ]);
    }
    public function addDues($request)
    {
        //dd($request->all());
        Validator::make($request->all(), [
            'name' => 'required|string',
            'duesType' => 'required',
            'month' => 'required|string',
            'amount' => 'required|numeric',
            'channel' => 'required|string',
            'signed' => 'required|string',
        ])->validate();
        return MemberDues::create([
            'user_id' => $request->id,
            'due_id' => $request->duesType,
            'name' => $request->name,
            'month' => $request->monthSelected,
            'year' => $request->yearSelected,
            'channel' => $request->channel,
            'currency' => $request->currency,
            'amount' => $request->amount,
            'signed' => $request->signed,
        ]);
    }
    public function addDonation($request)
    {
        // dd($request->all());
        Validator::make($request->all(), [
            'name' => 'required|string',
            'campaign' => 'required',
            'amount' => 'required|numeric',
            'channel' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email|string',
            'signed' => 'required|string',
        ])->validate();
        $result = MemberDonation::create([
            'user_id' => $request->id,
            'fundraiser_id' => $request->campaign,
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'channel' => $request->channel,
            'currency' => $request->currency,
            'amount' => $request->amount,
            'signed' => $request->signed,
        ]);
        Fundraiser::where('id', $request->campaign)->update([
            'donation_count' => DB::raw('donation_count + 1')
        ]);
        return $result;
    }
    public function addPledge($request)
    {
        //dd($request->all());
        if (array_key_exists('membershipId', $request->all())) {
            Validator::make($request->all(), [
                'firstName' => 'required|string',
                'lastName' => 'required|string',
                'campaign' => 'required',
                'amount' => 'required|numeric',
                'phone' => 'required|string',
                'email' => 'required|email|string',
                'signed' => 'required|string',
            ])->validate();
            $result = Pledge::create([
                'user_id' => $request->id,
                'fundraiser_id' => $request->campaign,
                'name' => $request->lastName . ' ' . $request->firstName,
                'phone' => $request->phone,
                'email' => $request->email,
                'currency' => $request->currency,
                'amount' => $request->amount,
                'updated_amount' => $request->amount,
                'redeem_token' => $this->generatePledgeToken(),
                'signed' => $request->signed,
            ]);
            if ($result) {
                Fundraiser::where('id', $request->campaign)->update([
                    'pledge_count' => DB::raw('pledge_count + 1')
                ]);
                /**
                 * Send SMS and email to member with redeem token
                 */
                return $result;
            }
        } else {
            Validator::make($request->all(), [
                'name' => 'required|string',
                'campaign' => 'required',
                'amount' => 'required|numeric',
                'phone' => 'required|string',
                'email' => 'required|email|string',
                'signed' => 'required|string',
            ])->validate();
            $result = Pledge::create([
                'fundraiser_id' => $request->campaign,
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email,
                'currency' => $request->currency,
                'amount' => $request->amount,
                'updated_amount' => $request->amount,
                'redeem_token' => $this->generatePledgeToken(),
                'signed' => $request->signed,
            ]);
            if ($result) {
                Fundraiser::where('id', $request->campaign)->update([
                    'pledge_count' => DB::raw('pledge_count + 1')
                ]);
                /**
                 * Send SMS and email to member with redeem token
                 */
                return $result;
            }
        }
    }
    public function redeemAPledge($request)
    {
        //dd($request);
        Validator::make($request->all(), [
            'redeemToken' => 'required',
            'amount' => 'required|numeric',
            'channel' => 'required|string',
        ])->validate();
        /**
         * Check for full payment or part payment
         */
        $pledge = Pledge::where('redeem_token', $request->redeemToken)->first();
        if ($request->amount < $pledge->updated_amount) {
            $result = Pledge::where('redeem_token', $request->redeemToken)->update([
                "channel" => $request->channel,
                "currency" => $request->currency,
                "updated_amount" => ($pledge->updated_amount - $request->amount),
                "paid_amount" => ($pledge->paid_amount + $request->amount),
            ]);
            if ($result) {
                /**
                 * Send thank you SMS and email to member about part payment
                 */
            }
        } else if ($request->amount >= $pledge->updated_amount) {
            Pledge::where('redeem_token', $request->redeemToken)->update([
                "channel" => $request->channel,
                "currency" => $request->currency,
                "updated_amount" => 0.00,
                "paid_amount" => ($pledge->paid_amount + $request->amount),
                "status" => 'Redeemed',
                "redeem_at" => $request->redeemAt,
                "redeem_token" => null
            ]);
            Fundraiser::where('id', $request->campaignId)->update([
                'pledge_redeem_count' => DB::raw('pledge_redeem_count + 1')
            ]);
            /**
             * Send thank you SMS and email to member about full payment
             */
        }
    }

    public function createPledgeMessage($request)
    {
        //dd($request);
        Validator::make($request->all(), [
            'pledgeMessage' => 'nullable|string',
        ])->validate();
        if ($request->created) {
            CampaignMessage::where('id', $request->created)->update(['pledge' => $request->pledgeMessage]);
            return CampaignMessage::all();
        }
        if (!$request->created) {
            CampaignMessage::create(['pledge' => $request->pledgeMessage]);
            return CampaignMessage::all();
        }
    }
    public function createGiveMessage($request)
    {
        //dd($request);
        Validator::make($request->all(), [
            'giveMessage' => 'nullable|string',
        ])->validate();
        if ($request->created) {
            CampaignMessage::where('id', $request->created)->update(['give' => $request->giveMessage]);
            return CampaignMessage::all();
        }
        if (!$request->created) {
            CampaignMessage::create(['give' => $request->giveMessage]);
            return CampaignMessage::all();
        }
    }
    public function fetchMemberTithes($id, $year = null)
    {
        $date = $year ? $year : date('Y');
        return DB::table('tithes')->where('user_id', $id)->where('year', $date)->get();
    }
    public function fetchMemberDues($id, $year = null)
    {
        $date = $year ? $year : date('Y');
        return DB::table('member_dues')
            ->where('user_id', $id)
            ->where('year', $date)
            ->join('dues', 'dues.id', '=', 'member_dues.due_id')
            ->select(
                'member_dues.*',
                'dues.name as duesType',
            )
            ->get();
    }
    public function fetchMemberSpecificDues($id, $duesId, $year = null)
    {
        $date = $year ? $year : date('Y');
        return DB::table('member_dues')
            ->where('user_id', $id)
            ->where('due_id', $duesId)
            ->where('year', $date)
            ->join('dues', 'dues.id', '=', 'member_dues.due_id')
            ->select(
                'member_dues.*',
                'dues.name as duesType',
            )
            ->get();
    }
    public function fetchPledges()
    {
        return DB::table('pledges')
            ->join('fundraisers', 'fundraisers.id', '=', 'pledges.fundraiser_id')
            ->select(
                'pledges.*',
                'fundraisers.campaign',
            )
            ->get();
    }
    public function fetchDonations()
    {
        return DB::table('member_donations')
            ->join('fundraisers', 'fundraisers.id', '=', 'member_donations.fundraiser_id')
            ->select(
                'member_donations.*',
                'fundraisers.campaign',
            )
            ->get();
    }
    public function fetchAllMemberDues()
    {
        return DB::table('member_dues')
            ->join('dues', 'dues.id', '=', 'member_dues.due_id')
            ->select(
                'member_dues.*',
                'dues.name as dues_type',
            )
            ->get();
    }
}