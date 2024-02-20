const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middleware/authToken"); 
const {authorization  } = require("../middleware/authorzation"); 
const FlowerController = require("../controller/flowerController");
router.get('/Flowers', FlowerController.getAllFlower);
router.get('/:id', FlowerController.getFlowerById);

// router.post('/', userController.createFlower);
router.post('/create',verifyToken, authorization, FlowerController.createFlower);
router.put('/update/:id',verifyToken,authorization, FlowerController.updateFlowerById);
router.delete('/delete/:id',verifyToken,authorization, FlowerController.deleteFlowerById);
// router.get('/Flowers/category/:category', FlowerController.getFlowerByName);
module.exports = router;
