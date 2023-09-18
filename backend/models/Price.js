const mongoose = require('mongoose');

const { Schema } = mongoose;

const PriceSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  }, // String is shorthand for {type: String}
  
  name: Number,
  date:String  
});

const Price=  mongoose.model('price',PriceSchema)
module.exports=Price;