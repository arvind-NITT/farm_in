const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  }, // String is shorthand for {type: String}
  
  name: String,
  date:String  
});

const Customer=  mongoose.model('customer',CustomerSchema)
module.exports=Customer;