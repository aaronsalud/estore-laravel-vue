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

    <table class="table table-bordered table-striped ">
        <thead>
            <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        @foreach($products as $product)
            <tr>
                <td>{{ $product->name }}</td>
                <td>{{ $product->details }}</td>
                <td>{!! Str::limit($product->description, 80 )!!}</td>
                <td>{{ $product->getFormattedPrice() }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div> 
@endsection

@section('extra-js')
@endsection