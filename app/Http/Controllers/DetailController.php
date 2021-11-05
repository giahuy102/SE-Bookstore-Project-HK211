<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

class DetailController extends Controller
{
    //
    public function index(Request $request, $id) {
        if (!ctype_digit($id)) {
            abort(404);
        }
        $book = Book::where('id', $id)->first();
        if (!$book) {
            abort(404);
        }
        $category = Category::where('id', $book->category_id)->first();

        return view("detail")->with([
            'book' => $book,
            'category' => $category
        ]);
    }
}
