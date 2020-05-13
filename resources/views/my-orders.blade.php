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

<div class="my-account-section container">
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

    </div>
</div>


@endsection

@section('extra-js')
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
@endsection