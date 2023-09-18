const mongoose= require('mongoose');
const mangUri = "mongodb://127.0.0.1:27017/sabjimanagement";

function Connet_to_mongoose(){
      mongoose.connect(mangUri,(error)=>{
        if(error)
        console.log(error);
        else
        console.log("Connected to db");
      })

}

module.exports= Connet_to_mongoose;