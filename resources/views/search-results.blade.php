@extends('layout')

@section('title', 'Search Results')

@section('extra-css')

@endsection

@section('content')

<x-breadcrumbs>
    <a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>Search</span>
</x-breadcrumbs>

<div class="search-container container">
    <h1>Search Results</h1>
    <p>{{ $products->count()}} result(s) for '{{request()->input('query')}}'</p>

    <ul>

    @foreach($products as $product)
    <li>{{$product->name}}</li>
    @endforeach
    </ul>
</div> 
@endsection

@section('extra-js')
@endsection