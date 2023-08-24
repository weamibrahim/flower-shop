const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({

  name: { 
    type: String
    , required: [false,"Title is required "] 
    
    },


  des: { 
    type: String, 
    required: [false, "summary is required"]

     },


  image: {
     type: String ,
    },
 
  price : { 
    type: Number,
     required: [false,"price is required "] },

});

module.exports = mongoose.model("Flower", TourSchema);