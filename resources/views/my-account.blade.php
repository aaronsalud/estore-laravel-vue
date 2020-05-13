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
        @if(count($errors) > 0)
        <div class="alert alert-danger" role="alert">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{!! $error !!}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <div class="header">
            <h1 class="stylish-heading">My Account</h1>
        </div>

        <div class="edit-form">
            <form action="{{route('profile.update')}}" method="POST">
                @csrf
                @method('put')
                <input id="name" name="name" type="text" value="{{ old('name', $user->name) }}" placeholder="Name" required>
                <div>
                    <input id="email" name="email" type="email" value="{{ old('email', $user->email) }}" placeholder="Email" required>
                </div>

                <div class="font-weight-bold mb-3">*Leave password fields blank to keep the current password</div>
                <input id="password" name="password" type="password" value="" placeholder="Password">
                <input id="password-confirm" name="password-confirm" type="password" value="" placeholder="Confirm Password">
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