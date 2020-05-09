<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
</head>
<body>
    <div> Order ID: {{ $order->id }} </div>
    <div> Order Email: {{ $order->billing_email }} </div>
    <div> Order Billing Name: {{ $order->billing_name }} </div>
    <div> Order Total: ${{ $order->billing_total / 100 }} </div>
</body>
</html>