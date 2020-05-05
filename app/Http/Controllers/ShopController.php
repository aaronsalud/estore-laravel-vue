<?php

namespace App\Http\Controllers;

use App\Category;
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
        if(request()->category){
            $products = Product::with('categories')->whereHas('categories', function($query){
                $query->where('slug', request()->category);
            })->inRandomOrder()->take(12)->get();
        }else{
            $products = Product::inRandomOrder()->take(12)->get();
        }

        $categories = Category::all();

        return view('shop', ['products' => $products, 'categories' => $categories]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $productsMightLike = Product::where('slug', '!=', $product->slug)->mightLike()->get();
        return view('product', ['product' => $product, 'productsMightLike' => $productsMightLike]);
    }
}
