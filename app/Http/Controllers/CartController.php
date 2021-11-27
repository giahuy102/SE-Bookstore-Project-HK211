<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\CartItem;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $isLogin = false;
        $username = null;
        $user_id = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
            $user_id = Auth::user()->user_id;
        }

        $mycart = DB::table('book')
            ->rightJoin('cart', 'book.book_id', '=', 'cart.book_id')
            ->select('book.title', 'book.image', 'book.selling_price', 'book.book_id', 'cart.amount')
            ->where('cart.user_id', '=', $user_id)
            ->get();
        // foreach ($categories as $category) {
        //     echo $category->name;
        //     echo $category->image;
        // }



        return view('cart')->with([
            'mycart' => $mycart,
            'isLogin' => $isLogin,
            'username' => $username
        ]);
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
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->user_id;

            $book_id = $request->data['book_id'];

            if (DB::table('cart')
                ->where([['user_id', '=', $user_id], ['book_id', '=', $book_id]])
                ->exists()
            ) {
                DB::table('cart')
                    ->select('amount')
                    ->where([['user_id', '=', $user_id], ['book_id', '=', $book_id]])
                    ->update(['amount' => DB::raw('amount + 1')]);
                return "Add amount to cart ...";
            } else {
                $affected = DB::table('cart')->insert([
                    'book_id' => $book_id,
                    'user_id' => $user_id,
                    'amount' => 1
                ]);

                if ($affected) return "Add new product to cart ...";
            }
        }
        // else {
            
        // }
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
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->user_id;
        }

        $affected = DB::table('cart')
            ->where([['user_id', '=', $user_id], ['book_id', '=', $id]])
            ->update(['amount' => $request->data['amount']]);
        if ($affected) return "update successfull ...";
        else
            return "Item not found to update...";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->user_id;
        }

        $affected = DB::table('cart')
            ->where([['user_id', '=', $user_id], ['book_id', '=', $id]])
            ->delete();
        if ($affected) return "delete successfull ...";
        else
            return "Item not found to delete...";
    }

    public function payment(Request $request)
    {
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->user_id;
        }

        $order_id = DB::table('orders')->insertGetId(
            [
                'delivery' => 'PROCESSING',
                'order_status' => 'PROCESSING',
                'create_at' => Carbon::now(),
                'pay_state' => 'Uncheck',
                'cus_id' => $user_id,
                'payment_method' => 'Card',
                'pay_time' => null
            ]
        );


        $list_book = $request->data['selectedID'];

        foreach ($list_book as $book_id) {
            $amount = DB::table('cart')
                ->where([['user_id', '=', $user_id], ['book_id', '=', $book_id]])
                ->value('amount');

            DB::table('include')->insert([
                'order_id' => $order_id,
                'book_id' => $book_id,
                'amount' => $amount
            ]);

            DB::table('cart')
                ->where([['user_id', '=', $user_id], ['book_id', '=', $book_id]])
                ->delete();
        }



        return DB::table('include')
            ->where('order_id', '=', $order_id)
            ->get();
    }

    public function totalAmount()
    {
        $user_id = null;
        if (Auth::check()) {
            $user_id = Auth::user()->user_id;
        }

        $total = DB::table('cart')
            ->where([['user_id', '=', $user_id]])
            ->sum('amount');

        return $total;
    }
}
