@component('mail::message')
# Order Received

Hello {{ $order->billing_name }}, we have received your order.

**Order ID:** {{ $order->id }}

<table class="table" style="width:100%;text-align:center;margin:20px 0;">
    <thead>
        <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($order->products as $product)
        <tr>
            <td>x{{ $product->pivot->quantity }}</td>
            <td> {{ $product->name }}</td>
            <td>${{ round($product->price / 100, 2)}}</td>
        </tr>
        @endforeach
        <tr style="border-top:1px solid; ">
            <td></td>
            <td style="background-color:yellow;">Total before tax:</td>
            <td style="background-color:yellow;">${{ round($order->billing_subtotal / 100, 2) }}</td>
        </tr>
        @if($order->billing_discount )
        <tr style="border-top:1px solid;">
            <td></td>
            <td style="background-color:yellow;">Discount:</td>
            <td style="background-color:yellow;">-${{ round($order->billing_discount / 100, 2) }}</td>
        </tr>
        @endif
        <tr style="border-top:1px solid;">
            <td></td>
            <td style="background-color:yellow;">Tax (13%):</td>
            <td style="background-color:yellow;">${{ round($order->billing_tax / 100, 2) }}</td>
        </tr>
        <tr style="border-top:1px solid;">
            <td></td>
            <td style="background-color:yellow;">Total:</td>
            <td style="background-color:yellow;">${{ round($order->billing_total / 100, 2) }}</td>
        </tr>
    </tbody>
</table>

You can get further details about your order by logging into our website.

@component('mail::button', ['url' => config('app.url'), 'color' => 'green'])
Go to Website
@endcomponent

Thank you again for choosing us.

Regards,<br>
EStore
@endcomponent