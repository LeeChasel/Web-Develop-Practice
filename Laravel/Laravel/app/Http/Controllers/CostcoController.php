<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CostcoController extends Controller
{
    public function index()
    {
        $database = DB::connection('mysql2');
        $tables = $database->select('SHOW TABLES');
        return $tables;
    }
}
