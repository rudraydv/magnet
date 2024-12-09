const express = require("express");
const router = express.Router();
const {processPayment, sendStripeApiKey} = require('../controllers/paymentController');


router.route('/process/payment').post(processPayment);
router.route('/stripeapikey').get(sendStripeApiKey);


module.exports = router;
