@extends('layout')

@section('title', $product['name'])

@section('extra-css')

@endsection

@section('content')


<x-breadcrumbs>
<a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <a href="{{route('shop.index')}}">Shop</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>{{ $product->name }}</span>
</x-breadcrumbs>

<div class="product-section container">
    <div>
        <div class="product-section-image">
            <img src="{{$product->getImagePath()}}" alt="product" id="currentImage" class="active">
        </div>
        @if($product->images)
        <div class="product-section-images">
            <div class="product-section-thumbnail selected">
                <img src="{{$product->getImagePath()}}" alt="product">
            </div>
            @foreach($product->getImageGalleryPaths() as $image)
            <div class="product-section-thumbnail">
                <img src="{{$image}}" alt="product">
            </div>
            @endforeach
        </div>
        @endif
    </div>
    <div class="product-section-information">
        <h1 class="product-section-title">{{$product['name']}}</h1>
        <div class="product-section-subtitle">{{$product['details']}}</div>
        <div class="product-section-price">{{$product->getFormattedPrice()}}</div>
        <p>{!! $product['description'] !!}</p>
        <p>&nbsp;</p>
        <form action="{{route('cart.store')}}" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{$product['id']}}">
            <input type="hidden" name="name" value="{{$product['name']}}">
            <input type="hidden" name="price" value="{{$product['price']}}">
            <button type="submit" class="button button-plain">Add to Cart</button>
        </form>
    </div>
</div> <!-- end product-section -->

@include('partials.might-like')


@endsection

@section('extra-js')
<script>
    (function() {
        const currentImage = document.querySelector('#currentImage');
        const images = document.querySelectorAll('.product-section-thumbnail');

        images.forEach((element) => element.addEventListener('click', thumbnailClick))

        function thumbnailClick(e) {
            currentImage.classList.remove('active');
            currentImage.addEventListener('transitionend', () => {
                currentImage.src = this.querySelector('img').src;
                currentImage.classList.add('active');
            });

            images.forEach((element) => element.classList.remove('selected'));
            this.classList.add('selected');
        }
    })();
</script>
@endsection