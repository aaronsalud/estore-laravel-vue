<template>
    <form action="#">
        <h2>Billing Details</h2>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" value="">
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" name="address" value="">
        </div>
        <div class="half-form">
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" name="city" value="">
            </div>
            <div class="form-group">
                <label for="province">Province</label>
                <input type="text" class="form-control" id="province" name="province" value="">
            </div>
        </div> 
        <div class="half-form">
            <div class="form-group">
                <label for="postalcode">Postal Code</label>
                <input type="text" class="form-control" id="postalcode" name="postalcode" value="">
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" name="phone" value="">
            </div>
        </div> 
        <div class="spacer"></div>
        <h2>Payment Details</h2>
            <div class="form-group">
                <label for="name_on_card">Name on Card</label>
                <input type="text" class="form-control" id="name_on_card" name="name_on_card" value="">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" name="address" value="">
            </div>
            <div class="form-group">
                <label for="cc-number">Credit Card Number</label>
                <input type="text" class="form-control" id="cc-number" name="cc-number" value="">
            </div>
            <div class="half-form">
                <div class="form-group">
                    <label for="expiry">Expiry</label>
                    <input type="text" class="form-control" id="expiry" name="expiry" placeholder="MM/DD">
                </div>
                <div class="form-group">
                    <label for="cvc">CVC Code</label>
                    <input type="text" class="form-control" id="cvc" name="cvc" value="">
                </div>
            </div>
            <div class="spacer"></div>
            <button type="submit" class="btn btn-primary full-width">Complete Order</button>
    </form>
</template>

<script>
export default {
    name: 'CheckoutForm'
}
</script>

<style>

</style>