<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $rules = [
            'name' => ['required', 'string', 'min:2', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'max:12', 'confirmed'],
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails())
        {
            return response(['message' => $validator->errors()]);
        }

        $data = $request->all();

        $data['password'] = Hash::make($data['password']);
        $data['is_admin'] = true;
        $data['api_token'] = Str::random_int(60);
        $user = User::create($data);
        return response(['data' => $user, 'api_token' => $user->api_token]);
    }
}