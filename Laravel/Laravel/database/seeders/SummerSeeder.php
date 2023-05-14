<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SummerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = fopen(__DIR__."/CSV/clothe/Summer.csv", "r");
        // Remove first row
        fgetcsv($file);
        
        $data = array();
        while (($file_data = fgetcsv($file, 200, ",")) !== FALSE)
        {
            $row_data = [
                'id' => $file_data[0],
                'name' => $file_data[1],
                'price' => $file_data[2],
                "stock" => $file_data[3],
                "type" => $file_data[4],
            ];
            array_push($data, $row_data);
        }
        DB::connection('mysql2')
            ->table('summer')
            ->insert($data);
    }
}
