@extends('layout')

@section('title', 'Shopping Cart')

@section('extra-css')

@endsection

@section('content')

<x-breadcrumbs>
    <a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>Shopping Cart</span>
</x-breadcrumbs>

<div class="cart-section container">
    <div>
        <h2>{{Cart::instance('default')->count() > 0 ? Cart::instance('default')->count() . ' item(s)' : 'No item' }} in Shopping Cart</h2>
        @if(Cart::instance('default')->count() > 0)
        <div class="cart-table">
            @foreach(Cart::instance('default')->content() as $item)
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
                            @csrf
                            {{ method_field('DELETE')}}
                            <button class="cart-options" type="submit">Remove</button>
                        </form>
                        <form action="{{route('saveForLater.store', $item->rowId)}}" method="POST">
                            @csrf
                            <button class="cart-options" type="submit">Save for later</button>
                        </form>

                    </div>
                    <div>
                        <select class="quantity" data-id="{{$item->rowId}}" data-productQuantity="{{$item->model->quantity}}">
                            @for($i=1; $i <=5; ++$i)
                            <option {{ $item->qty == $i ? 'selected' : ''}}>{{$i}}</option>
                            @endfor
                        </select>
                    </div>
                    <div>{{getFormattedPrice($item->subtotal)}}</div>
                </div>
            </div> <!-- end cart-table-row -->
            @endforeach
        </div> <!-- end cart-table -->

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
            @if(Cart::instance('default')->count() > 0)
            <a href="{{route('checkout')}}" class="button-primary">Proceed to Checkout</a>
            @endif
        </div>

        
        @if(Cart::instance('savedForLater')->count() > 0)
        <h2>{{ Cart::instance('savedForLater')->count() . ' item(s)' }} saved for later</h2>
        <div class="saved-for-later cart-table">
            @foreach(Cart::instance('savedForLater')->content() as $item)
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
                        <form action="{{route('saveForLater.destroy', $item->rowId)}}" method="POST">
                            @csrf
                            {{ method_field('DELETE')}}
                            <button class="cart-options" type="submit">Remove</button>
                        </form>
                        <form action="{{route('saveForLater.edit', $item->rowId)}}" method="POST">
                            @csrf
                            {{ method_field('PUT')}}
                            <button class="cart-options" type="submit">Add to cart</button>
                        </form>
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

@section('extra-js')
<script src="{{ asset('js/app.js') }}"></script>
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
<script>
    (function() {
        const className = document.querySelectorAll('.quantity');

        Array.from(className).forEach((element) => {
            element.addEventListener('change', () => {
                const id = element.getAttribute('data-id');
                const productQuantityRemaining = element.getAttribute('data-productQuantity');
                axios.put(`/cart/${id}`, {
                        quantity: element.value,
                        productQuantity: productQuantityRemaining
                    })
                    .then((res) => {
                        window.location.href = "{{ route('cart.index')}}";
                    })
                    .catch(err => {
                        console.log(err); 
                        window.location.href = "{{ route('cart.index')}}"
                    });
            });
        });
    })();
</script>
@endsection