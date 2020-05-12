@extends('layout')

@section('title', 'Register for an Account')

@section('content')
<div class="container">
    <div class="auth-pages">
        <div class="auth-left">
            @if(count($errors) > 0)
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            <h2>Create an Account</h2>
            <div class="spacer"></div>
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <input id="name" type="text" name="name" value="{{ old('name') }}" placeholder="Name" required autofocus>
                <input id="email" type="email" name="email" value="{{ old('email') }}" placeholder="Email" required>
                <input id="password" type="password" name="password" placeholder="Password" placeholder="Password" required>
                <input id="password-confirm" type="password" name="password_confirmation" placeholder="Confirm Password" required>
                <div class="auth-actions">
                    <button type="submit" class="auth-button">Register</button>
                    <div class="already-have-container">
                        <p><strong>Already have an account?</strong></p>
                        <a href="{{ route('login') }}">Sign In</a>
                    </div>
                </div>
            </form>
        </div>
        <div class="auth-right">
            <h2>New Customer</h2>
            <div class="spacer"></div>
            <div>
                <p class="font-weight-bold">Save time now.</p>
                <p>Creating an account will allow you to checkout faster in the future, have easy access to order history and customize your experience to suit your preferences.</p>
            </div>
            <div class="mt-5">
                <p class="font-weight-bold">Loyalty Program</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis, amet magnam accusamus nisi distinctio eveniet ullam. Facere, cumque architecto.</p>
            </div>
        </div>
    </div>
</div>
@endsection