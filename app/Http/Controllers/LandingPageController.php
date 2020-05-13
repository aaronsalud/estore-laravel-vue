<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LandingPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::where('featured', true)->inRandomOrder()->take(8)->get();
        $blogPosts =  Http::get('https://blog.laravelecommerceexample.ca/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=3')->json();
        return view('landing', ['products' => $products, 'blogPosts' => $blogPosts]);
    }
}
