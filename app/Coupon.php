<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    public static function findByCode($code){
        return self::where('code', $code)->first();
    }

    public function discount($total){
        if($this->type === 'fixed'){
            return $this->discount_value;
        }
        else if($this->type === 'percent'){
            return ($this->discount_percentage / 100) * $total;
        }
        return 0;
    }
}
