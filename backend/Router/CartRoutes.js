const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');
const { verifyToken } = require("../middleware/middleware"); 
router.post('/add-item',verifyToken, cartController.addItemToCart);
router.put('/update-item',verifyToken, cartController.updateCartItemQuantity);
router.put('/remove-item/:userId/:flowerId',verifyToken, cartController.removeItemFromCart);
router.put('/increment-item/:userId/:flowerId',verifyToken, cartController.incrementCartItemQuantity);
router.put('/decrement-item/:userId/:flowerId',verifyToken, cartController.decrementCartItemQuantity);
router.get('/:userId',verifyToken, cartController.getCart);


module.exports = router;
