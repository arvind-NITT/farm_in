const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  title:  { type:string,unique:true}, // String is shorthand for {type: String}
  description: { type:string},
  tag: String,
  date:String  
});

module.exports= mongoose.model('notes',UserSchema);