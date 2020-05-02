<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::inRandomOrder()->take(12)->get();

        return view('shop', ['products' => $products]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $productsMightLike = Product::where('slug', '!=', $product->slug)->inRandomOrder()->take(4)->get();
        return view('product', ['product' => $product, 'productsMightLike' => $productsMightLike]);
    }
}
