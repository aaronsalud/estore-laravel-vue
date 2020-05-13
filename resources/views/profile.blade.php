@extends('layout')

@section('title', 'My Account')

@section('extra-css')

@endsection

@section('content')

<x-breadcrumbs>
    <a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>My Account</span>
</x-breadcrumbs>

<div class="products-section container">
    <div class="sidebar">
        <ul>
            <li class="active"><a href="#">My Account</a></li>
            <li><a href="#">My Orders</a></li>
        </ul>
    </div> <!-- end sidebar -->
    <div>
        <div class="products-header">
            <h1 class="stylish-heading">My Account</h1>
        </div>

        <div class="products">
            Profile here
        </div> 
    </div>
</div>


@endsection

@section('extra-js')
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
@endsection