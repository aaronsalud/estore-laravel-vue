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
        $categories = Category::all();

        if(request()->category){
            $products = Product::with('categories')->whereHas('categories', function($query){
                $query->where('slug', request()->category);
            })->inRandomOrder()->take(12)->get();
            $categoryName = $categories->where('slug', request()->category)->first()->name;
        }else{
            $products = Product::inRandomOrder()->take(12)->get();
            $categoryName = 'Featured';
        }

        return view('shop', ['products' => $products, 'categories' => $categories, 'categoryName' => $categoryName]);
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
