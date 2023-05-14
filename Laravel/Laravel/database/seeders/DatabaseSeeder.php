<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

//或許會在這call其他的seeder file, 此處只呼叫就好
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            // UserinfoSeeder::class,

            // 1_food
            BeverageSeeder::class,
            CannedFoodSeeder::class,
            DryGoodsSeeder::class,
            FoodSeeder::class,
            OrganicFoodSeeder::class,
            SnacksSeeder::class,

            // 2_clothe
            AllSeasonSeeder::class,
            ClotheSeeder::class,
            SummerSeeder::class,
            WinterSeeder::class,

            // 3_electron
            EarphoneSeeder::class,
            ElectronicSeeder::class,
            HardDriveSeeder::class,
            LaptopSeeder::class,
            TelevisionSeeder::class,

            // 4_book
            BookSeeder::class,
            BookTotalSeeder::class,
            GameSeeder::class,
            KnowledgeSeeder::class,
            LanguageSeeder::class,
            StorySeeder::class,
        ]);
    }
}
