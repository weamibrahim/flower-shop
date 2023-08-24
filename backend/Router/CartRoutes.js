const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');

router.post('/add-item', cartController.addItemToCart);
router.put('/update-item', cartController.updateCartItemQuantity);
router.put('/remove-item/:userId/:flowerId', cartController.removeItemFromCart);
router.put('/increment-item/:userId/:flowerId', cartController.incrementCartItemQuantity);
router.put('/decrement-item/:userId/:flowerId', cartController.decrementCartItemQuantity);
router.get('/:userId', cartController.getCart);


module.exports = router;
