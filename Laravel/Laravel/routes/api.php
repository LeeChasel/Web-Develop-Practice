<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserinfoController;
use App\Http\Controllers\CostcoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/users', function (Request $request) {
    return $request->user();
});

Route::get('userinfo/index', [UserinfoController::class, 'index']);
Route::get('userinfo/show/{id}', [UserinfoController::class, 'show']);
Route::post('userinfo/add', [UserinfoController::class, 'add']);
Route::delete('userinfo/delete/{id}', [UserinfoController::class, 'delete']);
Route::patch('userinfo/updateData/{id}', [UserinfoController::class, 'updateData']);

Route::get('costco/index', [CostcoController::class, 'tables_index']);
Route::get('costco/{db_name}/index', [CostcoController::class, 'table_index']);