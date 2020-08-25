# Braintree PayPal Checkout Solution

Braintree supports various payment solutions which include PayPal Express Checkout. Although our PayPal integration includes [Vaulting](https://developers.braintreepayments.com/guides/paypal/vault/javascript/v3) and [Checkout](https://developers.braintreepayments.com/guides/paypal/checkout-with-paypal/javascript/v3) solution, this example will independently demonstrate how to set up PayPal one-time payment via Braintree SDK and highlight the important integration steps.

## SDK Architecture
The diagram shows the design flow of client and server SDK in order to securely collect payment information from customers:
<br>
<p float="left">
  <img src="https://github.com/paypal-gps-apac/braintree-paypal-checkout/blob/master/screenshot/image1.png" width="800" height="400">
</p>


## Integration
Generally it takes up few steps to integrate the PayPal Checkout Button (Smart Payment Button) by frontend and backend system. Before the integration, please make sure the PayPal account is already [created, verified and linked](https://articles.braintreepayments.com/guides/payment-methods/paypal/setup-guide?_ga=1.95210588.1584836863.1578023280) in the Braintree control panel.<br>
The integration requires three core steps to do the implementation:
1. [Generate the client token](https://developers.braintreepayments.com/start/hello-server/node#generate-a-client-token):<br>There are two sorts of methods to get client token, which is [Tokenization Key](https://developers.braintreepayments.com/guides/authorization/tokenization-key/javascript/v3) and [Client Token](https://developers.braintreepayments.com/guides/authorization/client-token). This example will use the client token, which is a signed JWT to do the authorization.

2. 


