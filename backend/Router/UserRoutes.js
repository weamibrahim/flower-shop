const passport = require("passport");
const { Router } = require("express");
const { verifyToken } = require("../middleware/middleware"); 
const authController = require("../controller/AuthController");
const userController = require("../controller/UserController");
const express = require("express");
const router = express.Router();





router.get('/alluser',verifyToken, userController.getAllUsers);

// router.get('/:id',verifyToken, userController.getUserById);

router.delete('/delete/:id',verifyToken, userController.deleteUserById);


router.put('/update/:id',verifyToken,userController.updateUserById);


// authRoutes
router.post('/register', authController.register);
router.post('/login', authController.login);
// router.post('/logout', authController.logout);



module.exports = router;
