<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Warehouse;

use Illuminate\Support\Facades\DB;          //myself

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //$books = DB::select("select * from book");
        //return $books;
        
        return DB::select("select * from book order by id asc");

        //return Warehouse::book::orderBy('id', 'asc')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $wareHouse = new Warehouse;
        // $wareHouse->title = $request->wareHouse["title"];
        // $wareHouse->id = $request->wareHouse["id"];
        // $wareHouse->save();

        // return $wareHouse;

        $book = DB::insert("insert into book values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [$request->input('title'), $request->input('id'), $request->input('author'), $request->input('category'),
        $request->input('publisher'), $request->input('input_date'), $request->input('quantity'), $request->input('cost_price'),
        $request->input('selling_price'), $request->input('page_number'), $request->input('sale'), $request->input('publish_date'), 
        $request->input('language'), $request->input('picture'), $request->input('description')]);
        // return redirect('http://127.0.0.1:8000/');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        //echo $id;
        $book = DB::select("select * from book where id = ? ", [$id]);
        if ($book) {
            return $book;
        }
        return 'Not found book';

        // $book = Warehouse::find($id);
        // if ($book){
        //     return $book;
        // }
        // return "Order not found.";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //echo "new title: ";
        //echo $request->input('title');
        DB::update("update book set title = ? where id = ?", [$request->input('title'), $id]);
        DB::update("update book set id = ? where id = ?", [$request->input('id'), $id]);
        DB::update("update book set author = ? where id = ?", [$request->input('author'), $id]);
        DB::update("update book set category = ? where id = ?", [$request->input('category'), $id]);
        DB::update("update book set publisher = ? where id = ?", [$request->input('publisher'), $id]);
        DB::update("update book set input_date = ? where id = ?", [$request->input('input_date'), $id]);
        DB::update("update book set quantity = ? where id = ?", [$request->input('quantity'), $id]);
        DB::update("update book set cost_price = ? where id = ?", [$request->input('cost_price'), $id]);
        DB::update("update book set selling_price = ? where id = ?", [$request->input('selling_price'), $id]);
        DB::update("update book set page_number = ? where id = ?", [$request->input('page_number'), $id]);
        DB::update("update book set sale = ? where id = ?", [$request->input('sale'), $id]);
        DB::update("update book set publish_date = ? where id = ?", [$request->input('publish_date'), $id]);
        DB::update("update book set language = ? where id = ?", [$request->input('language'), $id]);
        DB::update("update book set picture = ? where id = ?", [$request->input('picture'), $id]);
        DB::update("update book set description = ? where id = ?", [$request->input('description'), $id]);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $book = DB::select("select * from book where id = ?", [$id]);
        if ($book) {
            $deleted = DB::delete("delete from book where id = ?", [$id]);
        }
        return "Not found this book";
    }
}
