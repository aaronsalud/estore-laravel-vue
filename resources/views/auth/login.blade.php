@extends('layout')


@section('title', 'Sign In')

@section('content')
<div class="container">
    <div class="auth-pages">
        <div class="auth-left">
            @if(count($errors) > 0)
            <div class="alert alert-danger">
                <ul>
                    @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            <h2>Returning Customer</h2>
            <div class="spacer"></div>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <input type="email" name="email" id="email" value="{{old('email')}}" placeholder="Email" required autofocus>
                <input type="password" name="password" id="password" value="{{old('password')}}" placeholder="Password" required autofocus>

                <div class="auth-actions">
                    <button type="submit" class="auth-button">Sign In</button>
                    <div class="remember-checkbox">
                        <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember">Remember Me</label>
                    </div>
                </div>
                <div class="spacer"></div>
                @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
                @endif
            </form>
        </div>
        <div class="auth-right">
            <h2>New Customer</h2>
            <div class="spacer"></div>
            <div>
                <p class="font-weight-bold">Save time now.</p>
                <p>You don't need an account to checkout</p>
                <div class="spacer"></div>
                <a href="{{ route('guestCheckout.index') }}" class="auth-button-hollow">Continue as Guest</a>
            </div>
            <div class="mt-5">
                <p class="font-weight-bold">Save time later.</p>
                <p>Create an account for fast checkout and easy access to orders.</p>
                <div class="spacer"></div>
                <a href="{{ route('register') }}" class="auth-button-hollow">Create an Account</a>
            </div>
        </div>
    </div>
</div>
@endsection