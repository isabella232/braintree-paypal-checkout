const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.get('/', function(req, res, next) {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'fgbw23g9cwm847px',
    publicKey: 't2kmhtsgsq33r8qd',
    privateKey: 'c76733212321ea88f69a8c54117581fc'
  });

  gateway.clientToken.generate({}, (err, response) => {
    res.send(response);
  })
});

module.exports = router;