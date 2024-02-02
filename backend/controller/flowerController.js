

const Flower = require("../models/flower");

const multer = require('multer');

const path = require('path');

// Specify storage location and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Destination folder
    },
    filename: function (req, file, cb) {
       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname+ "_"+Date.now()+path.extname(file.originalname)); // Use original filename
    }
});
const upload = multer({ storage: storage });


exports.createFlower = [
  upload.single('image'), // 'image' should match the name attribute in your form input
  function(req, res) {
    const { name, des, price ,category} = req.body;
    console.log(req.body)
    const image = req.file; // This will contain the uploaded image data
console.log(image)
    if (!(name && des && price && image && category)) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
  
    

    const newFlower = new Flower({ name, des, image: image.filename, price ,category});

    console.log(newFlower);
    try {
      const result = newFlower.save();
      res.status(200).json({ message: "Flower created successfully", newFlower});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];
exports.getFlowerById = function(req, res) {
  Flower.findById(req.params.id)
    .then(Flower => {
      if (!Flower) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json( Flower);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
 };
 
 exports.getAllFlower = function(req, res) {
  Flower.find()
    .then(Flowers => {
      res.json(Flowers);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};
// exports.createFlower = function (req, res) {
//   const { name, des, price } = req.body;
//     console.log(req.body)
//     const image = req.file; // This will contain the uploaded image data
// console.log(image) 
//    if (!(name && des&& price)) {
//      return res.status(400).json({ message: "Please provide all required fields" });
//    }
 
//    const newFlower = new Flower({name,des,image,price,});
 
//    try {
//      const result =  newFlower.save();
//      res.status(200).json({ message: "Flower created successfully", newFlower: result });
//    } catch (error) {
//      res.status(500).json({ message: error.message });
//    }
//  };




















//Delete
 exports.deleteFlowerById = function(req, res) {
  const id = req.params.id;
  Flower.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        return res.status(404).json({ message: 'Flower not found' });
      }
      res.status(200).json({ message: 'Flower deleted successfully' });
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};



//update
 exports.updateFlowerById = [
  upload.single('image'),
 async (req, res) => {
    try {
        const { name, des, image,  price,category } = req.body;
        const updatedFlower = await Flower.findByIdAndUpdate(
          req.params.id,
          { name, des, image, price ,category}, // Use updatedFlower instead of Flower
          { new: true }
        );
        if (req.file) {
          updatedFlower.image = req.file.filename;
          await updatedFlower.save();
      }

        console.log(updatedFlower)
        if (!updatedFlower) {
          return res.status(404).json({ error: 'Flower item not found' });
        }
        res.json({updatedFlower, message: 'Flower item updated successfully' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
  }]
// //   search
//   exports.getFlowerByName = function(req, res) {
//     const name = req.params.name;
  
//     Food.find({name: name })
//       .then(Flowers => {
//         res.json(Flowers);
//       })
//       .catch(err => {
//         return res.status(500).json({ message: err.message });
//       });
//   };

