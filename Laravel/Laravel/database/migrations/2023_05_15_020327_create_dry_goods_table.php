<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDryGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    protected $connection = 'mysql2';

    public function up()
    {
        if (!Schema::hasTable('dry_goods'))
        {
            Schema::create('dry_goods', function (Blueprint $table) {
                $table->integer('id');
                $table->string('name');
                $table->integer('price');
                $table->integer('stock');
                $table->string('type', 30);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dry_goods');
    }
}
