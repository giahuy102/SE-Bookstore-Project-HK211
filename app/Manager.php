<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    //
    // protected $fillable = [
    // 	'title', 'id', 'author', 'publisher', 'input_date', 'quantity', 'cost_price', 'selling_price', 'page_number', 'sale', 'publish_date',
    //     'language', 'picture', 'description'
    // ];

    protected $fillable = [
    	'id', 'fullname', 'position_role', 'email', 'birthday', 'phone_number', 'address'
    ];
}
