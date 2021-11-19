<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use Illuminate\Auth\Middleware\Authenticate;
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

// Route::get('/cart', [CartController::class, 'index']);

Route::prefix('/cart')->group(function () {
    Route::post('/store', [CartController::class, 'store']);
    Route::put('/{id}', [CartController::class, 'update']);
    Route::delete('/{id}', [CartController::class, 'destroy']);
    Route::post('/payment', [CartController::class, 'payment']);
});


// Route::get('/purchased', 'PurchasedController@index');
// Route::get('/purchased', 'CartController@getPurchased');