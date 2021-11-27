<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HeaderController extends Controller
{
    //
    public function index(Request $request) {
        $categories = DB::table('category')->get();
        return $categories;
    }
}
