const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const crypto = require('crypto');
const nodemailer = require('nodemailer');


const authController = {};

authController.register = async (req, res, next) => {
  try {
    const { user_name, email, password, gender, mobile, address, role} = req.body;
    const user = req.body

    
    //console.log('accessTokenSecret:', accessTokenSecret);
    console.log( user);
    console.log('req.body:', req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Hashed Password:', hashedPassword);

      // ... rest of the registration logic
 
      // Handle the error appropriately, e.g., log it or send an error response
  
    const newUser = new User({
      user_name,
      email,
      role,
      address,
      mobile,
      password: hashedPassword,
      gender
   
      
    });

    const savedUser = await newUser.save();

    const accessToken = jwt.sign({ userId: savedUser._id },  accessTokenSecret);

    res.status(201).json({ message: 'User created successfully', accessToken ,user});
  } catch (err) {
    console.error('Error hashing password:', err);
    next(err);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log (user);

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate access token
    const accessToken = jwt.sign({ userId: user._id,role:user.role }, process.env.ACCESS_TOKEN_SECRET);
    console.log (accessToken);
    

    res.status(200).json({ message: 'Logged in successfully', accessToken,user });
  } catch (err) {
    next(err);
  }
};



authController.logout = async (req, res, next) => {
    try {
      // Get the authorization token from the request header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is missing or invalid' });
      }
  
      // Extract the token from the header
      const token = authHeader.split(' ')[1];
  
      // Verify the token and get the user ID
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const userId = decodedToken.userId;
  
      // TODO: Implement logout logic here, such as invalidating the token or deleting it from the client-side
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
      next(err);
    }
  };

  // Reset user password
  
  
 




module.exports = authController;