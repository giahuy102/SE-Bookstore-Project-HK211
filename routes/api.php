<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

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





// admin page
Route::post('book', 'BookShopController@store');               // create new book
Route::get('books', 'BookShopController@index');               // get all books
Route::delete('book/{id}', 'BookShopController@destroy');      // delete book
Route::get('book/{id}', 'BookShopController@show');            // find book by id
Route::put('book/{id}', 'BookShopController@update');          // update


Route::get('users', 'BookShopController@indexUser');          // get user information
Route::get('user/{id}', 'BookShopController@showUserByID');   // show information when editing profile
Route::get('getUser', 'BookShopController@showUser');   // show information when editing profile
Route::put('user/{id}', 'BookShopController@updateUser');   // update information
Route::put('user/password/{id}', 'BookShopController@updateUserPassword');  // update password

Route::get('categories', 'BookShopController@indexCategories');               // get all categories
// Route::get('category/{id}', 'BookShopController@showCategory');  
Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/cusName', [OrderController::class, 'getAllCusName']);
Route::get('/orders/total', [OrderController::class, 'getAllOrderTotal']);
Route::get('/order_book/{id}', [OrderController::class, 'getOrderBookByOrderID']);

Route::prefix('/order') -> group ( function (){
    Route::post('/store', [OrderController::class, 'store']);
    Route::put('/{id}', [OrderController::class, 'update']);
    Route::delete('/{id}', [OrderController::class, 'destroy']);
    Route::get('/{id}', [OrderController::class, 'show']);
});


Route::post('store_file', 'BookShopController@fileStore'); 
// Route::get('/cart', [CartController::class, 'index']);

Route::middleware('auth')->prefix('/cart')->group(function () {
    Route::post('/store', [CartController::class, 'store']);
    Route::put('/{id}', [CartController::class, 'update']);
    Route::delete('/{id}', [CartController::class, 'destroy']);
    Route::post('/payment', [CartController::class, 'payment']);
    Route::get('/totalAmount', [CartController::class, 'totalAmount']);
});


// Route::get('/purchased', 'PurchasedController@index');
// Route::get('/purchased', 'CartController@getPurchased');

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('dashboard', 'DashboardController@index');
