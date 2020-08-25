var express = require('express');
var router = express.Router();
var braintree = require('braintree');

router.get('/', function(req, res, next) {
  var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'fgbw23g9cwm847px',
    publicKey:    'nygrcphd83kgqj6w',
    privateKey:   '8d8f2a43045fa17464c24674981aadd3'
  });

  gateway.clientToken.generate({}, function (err, response) {
    var clientToken = response.clientToken
    res.send(clientToken);
  });
});


module.exports = router;