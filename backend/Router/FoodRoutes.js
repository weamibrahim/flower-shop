const express = require('express');
const router = express.Router();
const foodController = require("../controller/FoodController");
router.get('/foods', foodController.getAllFood);
router.get('/:id', foodController.getFoodById);

// router.post('/', userController.createFood);
router.post('/create',foodController.createFood);
router.put('/update/:id', foodController.updateFoodById);
router.delete('/delete/:id',foodController.deleteFoodById);
router.get('/foods/category/:category', foodController.getFoodByCategory);
module.exports = router;
