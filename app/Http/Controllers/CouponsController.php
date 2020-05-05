<?php

namespace App\Http\Controllers;

use App\Coupon;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class CouponsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $coupon  = Coupon::where('code', $request->coupon_code)->first();
        
        if(!$coupon){
            Alert::toast('Invalid coupon code. Please try again','error');
            return back();
        }

        session()->put('coupon', [
            'name' => $coupon->code,
            'discount' => $coupon->discount(Cart::subtotal())
        ]);

        Alert::toast('Discount coupon has been applied!','success');
        return redirect()->route('checkout');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        session()->forget('coupon');
        Alert::toast('Discount coupon has been removed','success');
        return redirect()->route('checkout');
    }
}
