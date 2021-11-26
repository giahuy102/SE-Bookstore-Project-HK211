<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('homepage');
});
Route::get('/category', function () {
    return view('category');
});
Route::get('/detail', function () {
    return view('detail');
});
Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
Route::get('/dashboardw', 'DashboardController@show_dashboardw')->name('dashboard_w');
Route::get('/dashboardm', 'DashboardController@show_dashboardm')->name('dashboard_m');

Route::get('', 'HomePageController@index');
Route::get('/detail/{id}', 'DetailController@index');
Route::get('/category/{type}', 'CategoryController@index');
Route::get('/similar-books/{id}', 'SimilarBooksController@index');

// Route::get('/cart', 'CartController@index');

// Route::get('/purchased', 'PurchasedController@index');

Auth::routes();
Route::get('/purchased', 'PurchasedController@index')->name('purchased');
Auth::routes();
Route::get('/cart', 'CartController@index')->name('cart');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/search-book', "SearchBookController@index");


// admin page
Route::get('/{any}', function () {
    return view('admin');
})->where('any', '.*');


Route::post('store_file', 'BookShopController@fileStore'); 
