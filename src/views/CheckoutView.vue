<script>
</script>
<template>

<div class="checkoutContainer">
    <div class="checkoutWrapper">
        <div class="checkoutLeft">
            <div class="checkoutLeft-checkbox">
                <input type="checkbox" id="billingDetails" name="billing"/>
                <label for="billingDetails">Do you want the billing details to differ from the address details?</label>
            </div>
            <div class="checkoutLeft-form">
                <div class="checkoutLeft-form-input">
                    <label for="name">full name</label>
                    <input type="text" name="name" id="name">
                </div>
                <div class="checkoutLeft-form-input">
                    <label for="street">street</label>
                    <input type="text" name="street" id="street">
                </div>
                <div class="checkoutLeft-form-input">
                    <div class="checkoutLeft-form-input-small">
                    <label for="number">house number</label>
                    <input type="text" name="number" id="number">
                    </div>
                    <div class="checkoutLeft-form-input-small">
                    <label for="city">city</label>
                    <input type="text" name="city" id="city">
                    </div>
                </div>

                <div class="checkoutLeft-buttons">
                    <h3 class="checkoutLeft-buttons-title">payment method</h3>
                    <input class="checkoutLeft-buttons-button" type="radio" name="payment" value="bank"> Banking card
                    <input class="checkoutLeft-buttons-button" type="radio" name="payment" value="visa"> VISA
                    <input class="checkoutLeft-buttons-button" type="radio" name="payment" value="paypal"> Paypal
                </div>
            </div>
        </div>
        <div class="checkoutRight">
            <h1>temp</h1>
        </div>
    </div>
</div>


</template>
<style>
</style>