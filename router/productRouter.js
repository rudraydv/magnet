const express = require("express");
const router = express.Router();
const {
    home,
   
} =  require('../controllers/productController');


router.route('/').get(home);
router.route('/product/:id').get(getproductDetails);



module.exports = router;