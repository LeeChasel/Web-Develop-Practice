<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userinfo;
use Illuminate\Http\RedirectResponse;

class UserinfoController extends Controller
{
    public function index(Request $req)
    {
        if ($req->is('api/userinfo/index'))
        {
            return Userinfo::all();
        }
    }

    public function show(Request $req, $id)
    {
        if ($req->is('api/userinfo/show/' . $id))
        {
            $data = Userinfo::find($id);
            return $data;
        }
    }
    
    public function delete(Request $req, $id)
    {
        if ($req->is('api/userinfo/delete/' . $id))
        {
            Userinfo::find($id)->delete();
            return response("OK",200);
        }
    }

    public function add(Request $req)
    {       
        if ($req->is('api/userinfo/add'))
        {
            $data = [
                "name" => $req->input('name'),
                "gender" => $req->input('gender'),
                "age" => $req->input('age'),
                "number" => $req->input('number'),
                "email" => $req->input('email'),
            ];
            Userinfo::create($data);
            return response("OK", 200);
        }
    }

    public function updateData(Request $req, $id)
    {
        if ($req->is('api/userinfo/updateData/' . $id))
        {   
                $data = Userinfo::find($id);
                $data->name = $req->name;
                $data->gender = $req->gender;
                $data->age = $req->age;
                $data->number = $req->number;
                $data->email = $req->email;
                $data->save();

                return response("OK",200);
        }
    }
}