<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CostcoController extends Controller
{
    public function tables_index()
    {
        $database = DB::connection('mysql2');
        $tables = $database->select('SHOW TABLES');
        return $tables;
    }

    public function table_index($table_name)
    {
        $database = DB::connection('mysql2');
        $table = $database->select('select * from ' . $table_name);
        return $table;
    }

    public function create_row(Request $req, $table_name)
    {
        $database = DB::connection('mysql2');
        $id = $req->id;
        $name = $req->name;
        $price = $req->price;
        $stock = $req->stock;
        $type = $req->type;
        $database->insert('insert into ' . $table_name . ' (id, name, price, stock, type) values (?, ?, ?, ?, ?)', [$id, $name, $price, $stock, $type]);
    }

    public function search_id($table_name, $id)
    {
        $database = DB::connection('mysql2');
        $rowData = $database->select('select * from '. $table_name . ' where id = ?', [$id]);
        return $rowData;
    }

    public function search_name($table_name, $name)
    {
        $database = DB::connection('mysql2');
        $rowData = $database->select('select * from '. $table_name . ' where name = ?', [$name]);
        return $rowData;
    }
    
    public function update_row(Request $req, $table_name, $old_id)
    {
        $database = DB::connection('mysql2');
        $id = $req->id;
        $name = $req->name;
        $price = $req->price;
        $stock = $req->stock;
        $type = $req->type;
        $database->update('update ' . $table_name . ' set id=?, name=?, price=?, stock=?, type=? where id=?', [$id, $name, $price, $stock, $type, $old_id]);
    }

    public function delete_row($table_name, $id)
    {
        $database = DB::connection('mysql2');
        $database->delete('delete from ' . $table_name . ' where id = ?', [$id]);
    }
}
