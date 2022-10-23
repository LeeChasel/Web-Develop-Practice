<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userinfo;

class UserinfoController extends Controller
{
    public function index()
    {
        return Userinfo::all();  
    }
    
    public function delete($id)
    {
        Userinfo::find($id)->delete();
    }

    public function add(Request $req)
    {
        $data = [
            "name" => $req->name,
            "gender" => $req->gender,
            "age" => $req->age,
            "number" => $req->number,
            "email" => $req->email,
        ];
        Userinfo::create($data);        
    }
}