<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use App\Models\Userinfo;

class UserinfoController extends Controller
{
    public function index(Request $req)
    {
        if ($req->is('api/userinfo/index'))
        {
            return Userinfo::all();
        }
    }
    
    public function delete(Request $req, $id)
    {
        if ($req->is('api/userinfo/delete/' + $id))
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
            return response($data);
        }
    }

    public function testt(Request $req)
    {
        
    }
}