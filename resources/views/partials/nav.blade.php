<div class="top-nav container">
    <div class="logo"><a href="{{route('home')}}">EStore</a></div>
    @if (! request()->is('checkout'))
    {{menu('main', 'partials.menus.main')}}
    @endif
</div> <!-- end top-nav -->