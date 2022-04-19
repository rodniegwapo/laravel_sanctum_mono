<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Rules\Password;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    public function addUser(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'role_id' => 'required',
            'password' => 'required'
        ]);
        $user = new User;
        $user->firstname = $request['firstname'];
        $user->lastname  = $request['lastname'];
        $user->email = $request['email'];
        $user->role_id =  $request['role_id'];
        $user->password = bcrypt($request->password);
        $user->save();
    }
    public function getUser()
    {
        $user = User::with('role')->get();
        return $user;
    }
    public function deleteUser(Request $request)
    {
        User::find($request->id)->delete();
    }
    public function updateUser(Request $request)
    {
        DB::table('users')
            ->where('id', $request->id)
            ->update([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'role_id' => $request->role_id['value'],
            ]);
    }


}
