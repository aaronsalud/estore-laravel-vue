@extends('layout')

@section('title', 'Products')

@section('extra-css')

@endsection

@section('content')

<div class="breadcrumbs">
    <div class="container">
        <a href="{{route('home')}}">Home</a>
        <i class="fa fa-chevron-right breadcrumb-separator"></i>
        <span>Shop</span>
    </div>
</div> <!-- end breadcrumbs -->

<div class="products-section container">
    <div class="sidebar">
        <h3>By Category</h3>
        <ul>
            @foreach($categories as $category)
            <li><a href="{{ route('shop.index', ['category' => $category['slug']]) }}">{{$category['name']}}</a></li>
            @endforeach
        </ul>

        <!-- <h3>By Price</h3>
            <ul>
                <li><a href="#">$0 - $700</a></li>
                <li><a href="#">$700 - $2500</a></li>
                <li><a href="#">$2500+</a></li>
            </ul> -->
    </div> <!-- end sidebar -->
    <div>
        <div class="products-header">
            <h1 class="stylish-heading">{{$categoryName}}</h1>
            <div>
                <span class="font-weight-bold">Price:</span>
                <a href="{{ route('shop.index', ['category' => request()->category, 'sort' => 'low_high']) }}">Low to High</a> |
                <a href="{{ route('shop.index', ['category' => request()->category, 'sort' => 'high_low']) }}">High to Low</a>
            </div>
        </div>

        <div class="products text-center">
            @forelse($products as $product)
            <div class="product">
                <a href="{{route('shop.show', $product['slug'])}}"><img src="{{$product->getImagePath()}}" alt="product"></a>
                <a href="{{route('shop.show', $product['slug'])}}">
                    <div class="product-name">{{$product['name']}}</div>
                </a>
                <div class="product-price">{{$product->getFormattedPrice()}}</div>
            </div>
            @empty
            <div class="text-left">No items found</div>
            @endforelse
        </div> <!-- end products -->
        {{ $products->links() }}
    </div>
</div>


@endsection