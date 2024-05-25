const express = require("express");
const router = new express.Router();
const StripeController = require("../controller/StripeController")

router.post('/create-checkout-session', StripeController.stripePayment);

module.exports = router;