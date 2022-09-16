<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $a = DB::table('news');
        for ($i = 1; $i<= 10; $i++)
        {
            $a->insert([
                'title' => Str::random(10),
                'description' => Str::random(10),
            ]);
        }
    }
}
