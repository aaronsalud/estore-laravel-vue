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

        if($product->quantity > setting('site.stock_threshold')){
            $stockLevel =  'In Stock';
        }
        else if($product->quantity < setting('site.stock_threshold') && $product->quantity > 0){
            $stockLevel =  'Low Stock';
        }else {
            $stockLevel = 'Out of Stock';
        }

        return view('product', ['product' => $product, 'productsMightLike' => $productsMightLike, 'stockLevel' => $stockLevel]);
    }

    public function search(Request $request){
        $request->validate([
            'query' => 'required|min:3'
        ]);

        $perPage = 10;

        $searchQuery = '%'. $request['query'] . '%';

        $products = Product::search($searchQuery)->paginate($perPage);

        return view('search-results', ['products' => $products]);
    }

    public function searchAlgolia(Request $request){
        return view('search-results-algolia');
    }
}
