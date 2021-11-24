<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class SearchBookController extends Controller
{
    //
    public function index(Request $request) {
        $searchString = $request->input("search_book");
        if ($searchString == NULL) $searchString = "";
        
        $books = DB::table('book')->join('category', 'book.cid', '=', 'category.category_id')
                                    ->where('title', 'regexp', $searchString)->get();

        $isLogin = false;
        $username = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
        }


        return view('searchresult')->with([
            'books' => $books,
            'isLogin' => $isLogin,
            'username' => $username
        ]);
    }
}
