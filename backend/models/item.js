const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  }, // String is shorthand for {type: String}
  Customer:String,
  veg: String,
  Quantity:Number,
  Price:Number,
  Total:Number,
  date:String,
  // Inputdate:String,
});

const Item=  mongoose.model('item',ItemSchema)
module.exports=Item;