<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Order::orderBy('order_id', 'asc')->get();
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
        $newOrder = new Order;
        $newOrder->delivery = $request->order["delivery"];
        $newOrder->order_status = $request->order["order_status"];
        $newOrder->cus_id = $request->order["cus_id"];
        $newOrder->create_at = Carbon::now()->toDateTimeString();
        $newOrder->save();

        return $newOrder;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::firstWhere('order_id', $id);
        if ($order){
            return $order;
        }
        return "Order not found.";
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
        $order = Order::firstWhere('order_id', $id);
        if ($order){
            DB::update("update orders set order_status = ? where order_id = ?", [$request->order['order_status'], $id]);
            return "Update successfully";
        }

        return "Order not found.";
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

        $order = DB::select("select * from orders where order_id = ?", [$id]);
        if ($order) {
            $deleted = DB::delete("delete from orders where order_id = ?", [$id]);
            return "Delete order successfully.";
        }
        return "Order not found.";
    }
}