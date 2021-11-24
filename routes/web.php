<?php

use Illuminate\Support\Facades\Route;


// use App\Http\Controllers\HomePageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('homepage');
// });

Route::get('', 'HomePageController@index');
Route::get('/detail/{id}', 'DetailController@index');
Route::get('/category/{type}', 'CategoryController@index');

// Route::get('/cart', 'CartController@index');

// Route::get('/purchased', 'PurchasedController@index');
// Route::get('/payment', 'PaymentController@index');

Auth::routes();
Route::get('/purchased', 'PurchasedController@index')->name('purchased');
Auth::routes();
Route::get('/cart', 'CartController@index')->name('cart');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



// admin page
Route::get('/{any}', function () {
    return view('admin');
})->where('any', '.*');


Route::post('store_file', 'BookShopController@fileStore'); 
