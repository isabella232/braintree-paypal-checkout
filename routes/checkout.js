const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', function(req, res, next) {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'fgbw23g9cwm847px',
    publicKey: 't2kmhtsgsq33r8qd',
    privateKey: 'c76733212321ea88f69a8c54117581fc'
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;

  console.log("nonce")
  console.log(req.body)
  console.log(req.body.paymentMethodNonce)
  // Create a new transaction for $10

  const newTransaction = gateway.transaction.sale({
    amount: '22.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, function(error, result) {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
  });
});

module.exports = router;