<?php

namespace App\Http\Controllers;

use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class SaveForLaterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store($id)
    {
        $item = Cart::get($id);
        Cart::remove($id);

        // Check for pre existing cart items
        $duplicateItems = Cart::instance('savedForLater')->search(function ($cartItem, $rowId) use ($id) {
            return $rowId === $id;
        });

        // Avoid item duplicates in the cart
        if ($duplicateItems->isNotEmpty()) {
            Alert::toast('Item has already been saved for later', 'success');
            return redirect()->route('cart.index');
        }

        Cart::instance('savedForLater')->add([
            'id' => $item->id,
            'name' => $item->name,
            'qty' => 1, 'price' => $item->price
        ])->associate('App\Product');

        Alert::toast('Item has been saved for later!', 'success');
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
        //
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
    }
}
