<?php

namespace App\Http\Controllers;

use App\Product;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Display toast messages when updating cart items
        if(session()->has('success_message')){
            Alert::toast(session()->get('success_message'),'success');
        }

        $cartItems = collect(Cart::content())->flatten();
        $productsMightLike = Product::mightLike()->get();
        return view('cart', ['cartItems' => $cartItems, 'productsMightLike' => $productsMightLike]);
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
        // Check for pre existing cart items
        $duplicateItems = Cart::search(function ($cartItem) use ($request) {
            return $cartItem->id === $request->id;
        });

        // Avoid item duplicates in the cart
        if ($duplicateItems->isNotEmpty()) {
            Alert::toast('Item already in the cart!', 'success');
            return redirect()->route('cart.index');
        }

        Cart::add([
            'id' => $request->id,
            'name' => $request->name,
            'qty' => 1, 'price' => $request->price
        ])->associate('App\Product');

        Alert::toast('Item has been added to the cart!', 'success');
        return redirect()->route('cart.index');
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
        Cart::instance('default')->update($id, $request->quantity);

        session()->flash('success_message', 'Cart item quantity updated successfully');
        
        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cart::remove($id);
        Alert::toast('Item has been removed from the cart!', 'success');
        return back();
    }
}
