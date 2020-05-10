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
    welcome
</div> 
@endsection

@section('extra-js')
@endsection