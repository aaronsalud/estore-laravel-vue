@extends('layout')


@section('title', 'Sign In')

@section('content')
<div class="container">
    <div class="auth-pages">
        <div class="auth-left">
            <h2>Returning Customer</h2>
            <div class="spacer"></div>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <input type="email" name="email" id="email" value="{{old('email')}}" placeholder="Email" required autofocus>
                <input type="password" name="password" id="password" value="{{old('password')}}" placeholder="Password" required autofocus>

                <div class="login-actions">
                    <button type="submit" class="auth-button">Sign In</button>
                    <div class="remember-checkbox">
                        <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember">Remember Me</label>
                    </div>
                </div>
                @if (Route::has('password.request'))
                <a class="btn btn-link" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
                @endif
            </form>
        </div>
        <div class="auth-right">

        </div>
    </div>
</div>
@endsection