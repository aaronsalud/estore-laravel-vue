<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public function getRouteKeyName(){
        return 'slug';
    }
    
    public function getFormattedPrice(){
        return "$" . number_format($this->price / 100, 2);
    }
}
