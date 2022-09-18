<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('index', 'App\Http\Controllers\tempController@index');
// Route::get('show', 'App\Http\Controllers\tempController@show');
// Route::get('testModel', 'App\Http\Controllers\tempController@testModel');
// Route::get('addData', 'App\Http\Controllers\tempController@addData');
// Route::get('testCreate', 'App\Http\Controllers\tempController@testCreate');
