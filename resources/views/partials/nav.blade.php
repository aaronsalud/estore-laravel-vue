<div class="top-nav container">
    <div class="logo"><a href="{{route('landing')}}">EStore</a></div>
    @if (! request()->is('checkout'))
    {{menu('main', 'partials.menus.main')}}
    @endif
</div> <!-- end top-nav -->