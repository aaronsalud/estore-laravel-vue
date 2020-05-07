<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use Cartalyst\Stripe\Exception\CardErrorException;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Cart::instance('default')->count() === 0){
            return redirect()->route('shop.index');
        }

        return view('checkout', [
            'discount' => $this->getPriceCalculations()->get('discount'),
            'newSubtotal' => $this->getPriceCalculations()->get('newSubtotal'),
            'newTax' => $this->getPriceCalculations()->get('newTax'),
            'newTotal' => $this->getPriceCalculations()->get('newTotal')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\CheckoutRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CheckoutRequest $request)
    {
        $contents = Cart::content()->map(function($item){
            return $item->model->slug . ', ' .$item->qty;
        })->values()->toJson();

        try{
            $charge = Stripe::charges()->create([
                'amount' => $this->getPriceCalculations()->get('newTotal') / 100,
                'currency' => 'CAD',
                'source' => $request->stripeToken,
                'description' => 'Order',
                'receipt_email' => $request->email,
                'metadata' => [
                    'contents' => $contents,
                    'quantity' => Cart::instance('default')->count(),
                    'discount' => collect(session()->get('coupon'))->toJson()
                ]
            ]);

            //Successful
            Cart::instance('default')->destroy();
            session()->forget('coupon');
            return redirect()->route('confirmation.index')->with('success', true);
        }
        catch(CardErrorException $e){
            Alert::toast($e->getMessage(),'error');
            return back();
        }
    }

    private function getPriceCalculations(){
        $tax = config('cart.tax') / 100;
        $discount = session()->get('coupon')['discount'] ?? 0;
        $newSubtotal = (Cart::subtotal() - $discount);
        $newTax = $newSubtotal * $tax;
        $newTotal = $newSubtotal * (1 + $tax);

        return collect([
            'tax' => $tax,
            'discount' => $discount,
            'newSubtotal' => $newSubtotal,
            'newTax' => $newTax,
            'newTotal' => $newTotal
        ]);
    }
}
