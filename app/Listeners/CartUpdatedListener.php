<?php

namespace App\Listeners;

use App\Coupon;
use App\Jobs\UpdateDiscount;

class CartUpdatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $couponName = isset(session()->get('coupon')['name']) ? session()->get('coupon')['name'] : null;

        if ($couponName) {
            $coupon  = Coupon::where('code', $couponName)->first();

            dispatch_now(new UpdateDiscount($coupon));
        }
    }
}
