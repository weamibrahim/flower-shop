const express = require('express');
const router = express.Router();
const FlowerController = require("../controller/flowerController");
router.get('/Flowers', FlowerController.getAllFlower);
router.get('/:id', FlowerController.getFlowerById);

// router.post('/', userController.createFlower);
router.post('/create',FlowerController.createFlower);
router.put('/update/:id', FlowerController.updateFlowerById);
router.delete('/delete/:id',FlowerController.deleteFlowerById);
// router.get('/Flowers/category/:category', FlowerController.getFlowerByName);
module.exports = router;
