<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function categories(){
        return $this->belongsToMany('App\Category');
    }

    public function getRouteKeyName(){
        return 'slug';
    }
    
    public function getFormattedPrice(){
        return '$' . number_format($this->price / 100, 2);
    }

    public function getImagePath(){
        return asset('img/products/' . $this->slug. '.jpg');
    }

    public function scopeMightLike($query){
        return $query->inRandomOrder()->take(4);
    }
}
