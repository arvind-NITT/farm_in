const mongoose = require('mongoose');

const { Schema } = mongoose;

const VegesSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  }, // String is shorthand for {type: String}
  
  name: String,
  date:String  
});

const Veges=  mongoose.model('veg',VegesSchema)
module.exports=Veges;