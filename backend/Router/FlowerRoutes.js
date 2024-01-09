const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middleware/middleware"); 
const FlowerController = require("../controller/flowerController");
router.get('/Flowers', FlowerController.getAllFlower);
router.get('/:id', FlowerController.getFlowerById);

// router.post('/', userController.createFlower);
router.post('/create',verifyToken,FlowerController.createFlower);
router.put('/update/:id',verifyToken, FlowerController.updateFlowerById);
router.delete('/delete/:id',verifyToken,FlowerController.deleteFlowerById);
// router.get('/Flowers/category/:category', FlowerController.getFlowerByName);
module.exports = router;
