<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\News;

class tempController extends Controller
{
    public function index(Request $request)
    {
            // DB::insert('insert into news(title,description) values(?,?)', ['1','2']);
            // return 111;
        return "99999";
    }

    public function show()
    {
        $res = DB::select('select * from news where id = ?', [1]);
        foreach($res as $new)
        {
            return $new->title;
        }
        // return $res;
    }

    public function testModel()
    {
        $post = News::where('id','>',1)->orderBy('title','desc')->get();
        return $post;
    }
    
    public function addData()
    {
        $post = new News;
        $post->title = "tit1";
        $post->description = "des1";
        $post->save();
    }
    public function testCreate()
    {
        News::create(["title"=>"新的標題", 'description'=>"新的描述"]);
    }
}