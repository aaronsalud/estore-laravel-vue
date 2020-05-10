<?php

namespace App\Http\Controllers;


use App\Product;
use App\ProductCategory;
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
        $perPage = 12;
        $categories = ProductCategory::all();

        if(request()->category){
            $products = Product::with('categories')->whereHas('categories', function($query){
                $query->where('slug', request()->category);
            });
            $categoryName = optional($categories->where('slug', request()->category)->first())->name;
        }else{
            $products = Product::where('featured', true);
            $categoryName = 'Featured';
        }

        if(request()->sort == 'low_high'){
            $products = $products->orderBy('price', 'asc');
        } 
        else if(request()->sort == 'high_low'){
            $products = $products->orderBy('price', 'desc');
        }

        $products = $products->paginate($perPage);

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

    public function search(Request $request){
        $request->validate([
            'query' => 'required|min:3'
        ]);

        $perPage = 10;

        $products = Product::where('name', 'like', '%'. $request['query'] . '%')->paginate($perPage);
        return view('search-results', ['products' => $products]);
    }
}
