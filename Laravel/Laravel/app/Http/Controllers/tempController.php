<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\News;

class tempController extends Controller
{
    public function index(Request $request)
    {
        // $data = ['name' => 'Chasel', 'state' => 'TW'];
        // $res = response()->json($data);
        // return $res;
        // $n = News::all();
        $n = News::where('id','2')->get();
        return $n;
        // foreach ($n as $i)
        // {
        //     return $i;
        // }

    }

    // public function show()
    // {
    //     $res = DB::select('select * from news where id = ?', [1]);
    //     foreach($res as $new)
    //     {
    //         return $new->title;
    //     }
    //     // return $res;
    // }

    // public function testModel()
    // {
    //     $post = News::where('id','>',1)->orderBy('title','desc')->get();
    //     return $post;
    // }
    
    // public function addData()
    // {
    //     $post = new News;
    //     $post->title = "tit1";
    //     $post->description = "des1";
    //     $post->save();
    // }
    // public function testCreate()
    // {
    //     News::create(["title"=>"新的標題", 'description'=>"新的描述"]);
    // }
}