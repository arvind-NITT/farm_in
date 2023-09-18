const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuantitySchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  }, // String is shorthand for {type: String}
  
  name: Number,
  date:String  
});

const Quantity=  mongoose.model('Quantity',QuantitySchema)
module.exports=Quantity;