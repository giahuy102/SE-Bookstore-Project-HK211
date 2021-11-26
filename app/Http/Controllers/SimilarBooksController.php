<?php

namespace App\Http\Controllers;

use App\Book;
use App\Category;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class SimilarBooksController extends Controller
{
    //
    public function index(Request $request, $id) {
        if (!ctype_digit($id)) {
            abort(404);
        }
        $book = Book::where('book_id', $id)->first();
        
        if (!$book) {
            abort(404);
        }
        // $category = Category::where('category_id', $book->cid)->first();

        $books = Book::where('cid', $book->cid)->orWhere('language', $book->language)->get();


        $isLogin = false;
        $username = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
        }

        return view("similarbooks")->with([
            'isLogin' => $isLogin,
            'username' => $username,
            'books' => $books,
            'bookTitle' => $book->title
        ]);
    }
}
