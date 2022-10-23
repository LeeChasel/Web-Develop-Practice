<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userinfo extends Model
{
    protected $fillable = ['name', 'gender', 'age', 'number', 'email'];
    use HasFactory;
}