<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Userinfo;

class UserinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 5; $i++)
        {
            $num = "09";
            for ($n = 1; $n <=8; $n++)
            {
                $num .= rand(0,9);
            }
            $gender = array("Male", "Female");
            Userinfo::create([
                'name' => Str::random(6),
                'gender' => $gender[rand(0,1)],
                'age' => rand(1,99),
                'number' => $num,
                'email' => Str::random(6).'@gmail.com',
            ]);
        }
    }
}