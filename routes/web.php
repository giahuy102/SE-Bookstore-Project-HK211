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

Route::get('', 'HomePageController@index');
Route::get('/category', 'CategoryController@index');
Route::get('/detail', 'DetailController@index');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
