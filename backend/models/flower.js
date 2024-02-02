const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({

  name: { 
    type: String
    , required: false
    
    },
    category: { 
      type: String
      
      
      },

  des: { 
    type: String, 
    required: false

     },


  image: {
     type: String ,
    },
 
  price : { 
    type: Number,
     required: false },

});

module.exports = mongoose.model("Flower", TourSchema);