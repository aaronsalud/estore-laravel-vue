@extends('layout')

@section('title', 'Search Results from Algolia')

@section('extra-css')

@endsection

@section('content')

<x-breadcrumbs>
    <a href="{{route('landing')}}">Home</a>
    <i class="fa fa-chevron-right breadcrumb-separator"></i>
    <span>Search</span>
</x-breadcrumbs>

<div class="search-container container my-3">
    
    <h1>Search Results</h1>
</div> 
@endsection

@section('extra-js')
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
@endsection