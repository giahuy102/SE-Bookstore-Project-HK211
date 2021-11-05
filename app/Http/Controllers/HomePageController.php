<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

class HomePageController extends Controller
{
    //
    public function index() {

        $categories = Category::all();
        $books = Book::all();
        // foreach ($categories as $category) {
        //     echo $category->name;
        //     echo $category->image;
        // }


        return view('homepage')->with([
            'categories' => $categories,
            'books' => $books
        ]);
    }
}
