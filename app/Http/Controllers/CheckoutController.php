<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Order;
use App\OrderProduct;
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

        if(auth()->user() && request()->is('guest-checkout')){
            return redirect()->route('checkout');
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

            $this->addToOrdersTables($request, null);

            //Successful
            Cart::instance('default')->destroy();
            session()->forget('coupon');
            return redirect()->route('confirmation.index')->with('success', true);
        }
        catch(CardErrorException $e){
            Alert::toast($e->getMessage(),'error');
            $this->addToOrdersTables($request, $e->getMessage());
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

    private function addToOrdersTables($request, $error)
    {
        // Insert into orders table
        $order = Order::create([
            'user_id' => auth()->user() ? auth()->user()->id : null,
            'billing_email' => $request->email,
            'billing_name' => $request->name,
            'billing_address' => $request->address,
            'billing_city' => $request->city,
            'billing_province' => $request->province,
            'billing_postalcode' => $request->postalcode,
            'billing_phone' => $request->phone,
            'billing_name_on_card' => $request->name_on_card,
            'billing_discount' => $this->getPriceCalculations()->get('discount'),
            'billing_discount_code' => session()->get('coupon')['name'] ?? null,
            'billing_subtotal' => $this->getPriceCalculations()->get('newSubtotal'),
            'billing_tax' => $this->getPriceCalculations()->get('newTax'),
            'billing_total' => $this->getPriceCalculations()->get('newTotal'),
            'error' => $error,
        ]);

        // Insert into order_product table
        foreach (Cart::content() as $item) {
            OrderProduct::create([
                'order_id' => $order->id,
                'product_id' => $item->model->id,
                'quantity' => $item->qty,
            ]);
        }

        return $order;
    }
}
