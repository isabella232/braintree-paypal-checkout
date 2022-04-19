## SDK Architecture
The diagram shows the design flow of client and server SDK in order to securely collect payment information from customers:
1. Your front-end requests a client token from your server and initializes the client SDK.
2. Your server generates and sends a client token back to your client using the server SDK.
3. The customer submits payment information, the client SDK communicates that information to Braintree and returns a payment method nonce.
4. Your front-end sends the payment method nonce to your server.
5. Your server code receives the payment method nonce and then uses the server SDK to create a transaction.
<br>
<p float="left">
  <img src="https://github.com/paypal-gps-apac/braintree-paypal-checkout/blob/master/screenshot/image1.png" width="800" height="508">
</p>


## Integration
Generally it takes up few steps to integrate the PayPal Checkout Button (Smart Payment Button) by frontend and backend system. Before the integration, please make sure the PayPal account is already [created, verified and linked](https://articles.braintreepayments.com/guides/payment-methods/paypal/setup-guide?_ga=1.95210588.1584836863.1578023280) in the Braintree control panel.<br>
The integration requires three core steps to do the implementation:
1. [Generate the Client Token](https://developers.braintreepayments.com/start/hello-server/node#generate-a-client-token):<br>There are two sorts of methods to get client token, which is [Tokenization Key](https://developers.braintreepayments.com/guides/authorization/tokenization-key/javascript/v3) and [Client Token](https://developers.braintreepayments.com/guides/authorization/client-token). This example will use the client token, which is a signed JWT to do the authorization.

2. [Render PayPal Button](https://developers.braintreepayments.com/guides/paypal/checkout-with-paypal/javascript/v3):<br>After retrived the client token, we will need to render the PayPal Checkout button by Braintree SDK libraries, with the calling of few Braintree APIs. You will get the payment nonce after customer confirmed the transaction. You will need to pass it to your server to settle the payment aftermath.

3. [Settle Payment](https://developers.braintreepayments.com/guides/paypal/server-side/node):<br>Once you pass the payment nonce to your backend, you are required to call [transaction.sale()](https://developers.braintreepayments.com/reference/request/transaction/sale/node) API to do the settlement.

### Installation
```sh
> npm install
```

### Run
```sh
> npm start
```
 After the project is compiled, please access to [http://localhost:3000](http://localhost:3000) to try the example.


### Contribution
We are welcome anyone to folk this repository and make PR to contribute this example project by creating test cases or code changes :smile:.
