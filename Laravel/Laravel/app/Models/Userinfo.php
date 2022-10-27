<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userinfo extends Model
{
    // 透過Modle修改DB的檔案時(News::create)，要標記可更改(fillable)或不可更改(guarded)
    protected $fillable = ['name', 'gender', 'age', 'number', 'email'];
    use HasFactory;
}