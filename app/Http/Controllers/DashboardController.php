<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $startDate = $request['startDate'];
        $endDate = $request['endDate'];
        
        $newUser = DB::select('select COUNT(*) as number from users where created_at <= date( ? ) and created_at >= date( ? )', [$endDate, $startDate]);
        $newUser = array("newUser"=>$newUser);
        $newOrder = DB::select('select COUNT(*) as number from orders where create_at <= ? and create_at >= ?', [$endDate, $startDate]);
        $newOrder = array("newOrder"=>$newOrder);
        $sale = DB::select('select sum(amount * selling_price) as number FROM bookshop.include, bookshop.book, bookshop.orders where bookshop.include.book_id = bookshop.book.book_id and bookshop.include.order_id = bookshop.orders.order_id and bookshop.orders.order_status = "COMPLETED" and create_at <= ? and create_at >= ?', [$endDate, $startDate]);
        $sale = array("sale"=>$sale);
        $totalOrder = DB::select('select COUNT(*) as number from orders where create_at <= ?', [$endDate]);
        $totalOrder = array("totalOrder"=>$totalOrder);
        $processingOrder = DB::select('select COUNT(*) as number from orders where create_at <= ? and bookshop.orders.order_status = "PROCESSING"', [$endDate]);
        $processingOrder = array("processingOrder"=>$processingOrder);
        $deliveringOrder = DB::select('select COUNT(*) as number from orders where create_at <= ? and bookshop.orders.delivery = "PROCESSING"', [$endDate]);
        $deliveringOrder = array("deliveringOrder"=>$deliveringOrder);
        $completedOrder = DB::select('select COUNT(*) as number from orders where create_at <= ? and bookshop.orders.order_status = "COMPLETED"', [$endDate]);
        $completedOrder = array("completedOrder"=>$completedOrder);
        $cancelledOrder = DB::select('select COUNT(*) as number from orders where create_at <= ? and bookshop.orders.order_status = "CANCELLED"', [$endDate]);
        $cancelledOrder = array("cancelledOrder"=>$cancelledOrder);
        $topCategory = DB::select('select category_name as name, sum(selling_price * amount) as number from bookshop.category, bookshop.book, bookshop.include, bookshop.orders where bookshop.category.category_id = bookshop.book.cid and bookshop.book.book_id = bookshop.include.book_id and bookshop.include.order_id = bookshop.orders.order_id and bookshop.orders.order_status = "COMPLETED" and create_at <= ? and create_at >= ? group by category_id, category_name order by sum(selling_price * amount) desc limit 5;', [$endDate, $startDate]);
        $topCategory = array("topCategory"=>$topCategory);

        $topProducts = DB::select('select title as name, sum(selling_price * amount) as number from bookshop.book, bookshop.include, bookshop.orders where bookshop.book.book_id = bookshop.include.book_id and bookshop.include.order_id = bookshop.orders.order_id and bookshop.orders.order_status = "COMPLETED" and create_at <= ? and create_at >= ? group by bookshop.book.title, bookshop.book.book_id order by sum(selling_price * amount) desc limit 5;', [$endDate, $startDate]);
        $topProducts = array("topProducts"=>$topProducts);

        $topRemainProduct = DB::select('select  title as name, quantity as number from bookshop.book order by quantity asc limit 5;', []);
        $topRemainProduct = array("topRemainProduct"=>$topRemainProduct);
        $saleData = array("saleData"=>DB::select('select  sum(amount * selling_price) as number, date(orders.create_at) as date FROM bookshop.include, bookshop.book, bookshop.orders where bookshop.include.book_id = bookshop.book.book_id and bookshop.include.order_id = bookshop.orders.order_id and bookshop.orders.order_status = "COMPLETED" and create_at <= ? and create_at >= ? group by date(orders.create_at);', [$endDate, $startDate]));
        $userData = array("userData"=> DB::select('select count(*) as number, date(created_at) as date FROM bookshop.users where created_at <= ? and created_at >= ? group by date(created_at)', [$endDate, $startDate]));
        $orderData = array("orderData"=>DB::select('select count(*) as number , date(create_at) as date FROM bookshop.orders  where create_at <= ? and create_at >= ? group by date(create_at);', [$endDate, $startDate]));
        $ret = (array_merge($newUser, $newOrder, $sale, $totalOrder, $processingOrder, $deliveringOrder, $completedOrder, $cancelledOrder, $saleData, $userData, $orderData, $topCategory, $topProducts, $topRemainProduct));
        return $ret;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Illuminate\Http\Response
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
        //
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
    }
}
