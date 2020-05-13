@extends('layout')

@section('title', 'My Orders')

@section('extra-css')

@endsection

@section('content')

<x-breadcrumbs>
    <a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>My Orders</span>
</x-breadcrumbs>

<div class="my-account-section my-orders container">
    <div class="sidebar">
        <ul>
            <li><a href="{{ route('profile.edit') }}">My Account</a></li>
            <li class="active"><a href="#">My Orders</a></li>
        </ul>
    </div> <!-- end sidebar -->
    <div>
        <div class="header">
            <h1 class="stylish-heading">My Orders</h1>
        </div>
        <div>
            @foreach ($orders as $order)
            <div class="order-container">
                <div class="order-header">
                    <div class="order-header-items">
                        <div>
                            <div class="uppercase font-bold">Order Placed</div>
                            <div>{{ getFormattedDate($order->created_at) }}</div>
                        </div>
                        <div>
                            <div class="uppercase font-bold">Order ID</div>
                            <div>{{ $order->id }}</div>
                        </div>
                        <div>
                            <div class="uppercase font-bold">Total</div>
                            <div>{{ getFormattedPrice($order->billing_total) }}</div>
                        </div>
                    </div>
                    <div>
                        <div class="order-header-items">
                        <div><a href="#">Order Details</a></div>   
                            <div>|</div>
                            <div><a href="#">Invoice</a></div>
                        </div>
                    </div>
                </div>
                <div class="order-products">
                    @foreach ($order->products as $product)
                    <div class="order-product-item">
                        <div><img src="{{ generateImageLink($product->image) }}" alt="Product Image"></div>
                        <div>
                            <div>
                                <a href="{{ route('shop.show', $product->slug) }}">{{ $product->name }}</a>
                            </div>
                            <div>{{ getFormattedPrice($product->price) }}</div>
                            <div>Quantity: {{ $product->pivot->quantity }}</div>
                        </div>
                    </div>
                    @endforeach

                </div>
            </div>
            @endforeach
        </div>

    </div>
</div>


@endsection

@section('extra-js')
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
@endsection