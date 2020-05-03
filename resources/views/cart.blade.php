@extends('layout')

@section('title', 'Shopping Cart')

@section('extra-css')

@endsection

@section('content')

<div class="breadcrumbs">
    <div class="container">
        <a href="{{route('home')}}">Home</a>
        <i class="fa fa-chevron-right breadcrumb-separator"></i>
        <span>Shopping Cart</span>
    </div>
</div> <!-- end breadcrumbs -->

<div class="cart-section container">
    <div>
        <h2>{{$cartItems->count() > 0 ? $cartItems->count() . ' item(s)' : 'No item' }} in Shopping Cart</h2>
        @if($cartItems->count() > 0)
        <div class="cart-table">
            @foreach($cartItems as $item)
            <div class="cart-table-row">
                <div class="cart-table-row-left">
                    <a href="{{route('shop.show', $item->model->slug)}}"><img src="{{$item->model->getImagePath()}}" alt="item" class="cart-table-img"></a>
                    <div class="cart-item-details">
                        <div class="cart-table-item"><a href="{{route('shop.show', $item->model->slug)}}">{{$item->model->name}}</a></div>
                        <div class="cart-table-description">{{$item->model->details}}</div>
                    </div>
                </div>
                <div class="cart-table-row-right">
                    <div class="cart-table-actions">
                        <form action="{{route('cart.destroy', $item->rowId)}}" method="POST">
                            {{ csrf_field() }}
                            {{ method_field('DELETE')}}
                            <button class="cart-options" type="submit">Remove</button>
                        </form>
                        <form action="{{route('cart.saveForLater', $item->rowId)}}" method="POST">
                            {{ csrf_field() }}
                            <button class="cart-options" type="submit">Save for later</button>
                        </form>

                    </div>
                    <div>
                        <select class="quantity">
                            <option selected="">1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>{{$item->model->getFormattedPrice()}}</div>
                </div>
            </div> <!-- end cart-table-row -->
            @endforeach
        </div> <!-- end cart-table -->

        <a href="#" class="have-code">Have a Code?</a>

        <div class="have-code-container">
            <form action="#">
                <input type="text">
                <button type="submit" class="button button-plain">Apply</button>
            </form>
        </div> <!-- end have-code-container -->

        <div class="cart-totals">
            <div class="cart-totals-left">
                Shipping is free because we’re awesome like that. Also because that’s additional stuff I don’t feel like figuring out :).
            </div>

            <div class="cart-totals-right">
                <div>
                    Subtotal <br>
                    Tax <br>
                    <span class="cart-totals-total">Total</span>
                </div>
                <div class="cart-totals-subtotal">
                    {{ getFormattedPrice(Cart::subtotal()) }} <br>
                    {{ getFormattedPrice(Cart::tax()) }}<br>
                    <span class="cart-totals-total">{{ getFormattedPrice(Cart::total()) }}</span>
                </div>
            </div>
        </div> <!-- end cart-totals -->
        @endif
        <div class="cart-buttons">
            <a href="{{route('shop.index')}}" class="button">Continue Shopping</a>
            @if($cartItems->count() > 0)
            <a href="#" class="button-primary">Proceed to Checkout</a>
            @endif
        </div>

        <h2>{{Cart::instance('saveForLater')->count() > 0 ? Cart::instance('saveForLater')->count() . ' item(s)' : 'No item ' }} saved for later</h2>
        @if(Cart::instance('saveForLater')->count() > 0)
        <div class="saved-for-later cart-table">
            @foreach(Cart::instance('saveForLater')->content() as $item)
            <div class="cart-table-row">
                <div class="cart-table-row-left">
                    <a href="{{route('shop.show', $item->model->slug)}}"><img src="{{$item->model->getImagePath()}}" alt="item" class="cart-table-img"></a>
                    <div class="cart-item-details">
                        <div class="cart-table-item"><a href="{{route('shop.show', $item->model->slug)}}">{{$item->model->name}}</a></div>
                        <div class="cart-table-description">{{$item->model->details}}</div>
                    </div>
                </div>
                <div class="cart-table-row-right">
                    <div class="cart-table-actions">
                        <a href="#">Remove</a> <br>
                        <a href="#">Save for Later</a>
                    </div>
                    <div>{{$item->model->getFormattedPrice()}}</div>
                </div>
            </div> <!-- end cart-table-row -->
            @endforeach
        </div> <!-- end saved-for-later -->
        @endif
    </div>

</div> <!-- end cart-section -->

@include('partials.might-like')


@endsection