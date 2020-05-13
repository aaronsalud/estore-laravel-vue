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

<div class="my-account-section container">
    <div class="sidebar">
        <ul>
            <li class="active"><a href="#">My Account</a></li>
            <li><a href="#">My Orders</a></li>
        </ul>
    </div> <!-- end sidebar -->
    <div>
        <div class="header">
            <h1 class="stylish-heading">My Account</h1>
        </div>
        <div class="edit-form">
            <form action="#" method="POST">
                <input id="name" type="text" value="" placeholder="Name" required>
                <input id="email" type="email" value="" placeholder="Email" required>
                <input id="password" type="password" value="" placeholder="Password" required>
                <input id="password-confirm" type="password" value="" placeholder="Confirm Password" required>
                <div>
                    <button class="submit-button" type="submit">Update Profile</button>
                </div>
            </form>
        </div>
    </div>
</div>


@endsection

@section('extra-js')
<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
<script src="{{ asset('js/algolia-client.js') }}"></script>
@endsection