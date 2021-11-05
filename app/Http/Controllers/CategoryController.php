<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    //
    public function index(Request $request, $type) {
        // $books = DB::table('book')->leftJoin('category', 'book.category_id', '=', 'category.id');
        // if (!ctype_digit($type)) {
        //     if ($type == 'best_seller') {
        //         $books = $books->orderBy('num_sale', 'DESC')->take(10)->get();
        //         print_r($books);
        //     }
        //     else if ($type == "special_discount") {
        //         $books = $books->orderBy('discount', 'DESC')->take(10);
        //     }
        //     else if ($type == "popular_week") {
        //         $books = $books->orderBy('num_view', 'DESC')->take(10);
        //     }
        //     else abort(404);
        // }
        // else {
        //     $books = $books->where('category_id', $type)->get();
        // }
        return view('category');
    }
}
