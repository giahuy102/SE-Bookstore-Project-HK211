<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\ManagerController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('book', 'WarehouseController@store');               // create new book
Route::get('books', 'WarehouseController@index');               // get all books
Route::delete('book/{id}', 'WarehouseController@destroy');      // delete book
Route::get('book/{id}', 'WarehouseController@show');            // find book by id
Route::put('book/{id}', 'WarehouseController@update');          // update





Route::get('users', 'ManagerController@index');          // get user information
Route::get('user/{id}', 'ManagerController@show');   // show information when editing profile
Route::put('user/{id}', 'ManagerController@update');



// Route::get('/orders', [WarehouseController::class, 'index']);
// Route::prefix('/book') -> group ( function (){
//     Route::post('/store', [WarehouseController::class, 'store']);
//     // Route::put('/{id}', [WarehouseController::class, 'update']);
//     // Route::delete('/{id}', [WarehouseController::class, 'destroy']);
//     // Route::get('/{id}', [WarehouseController::class, 'show']);
// });
