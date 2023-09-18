// const Connet_to_mongoose= require('./connect_to_db');
const express = require('express');
const auth = require('./routes/auth');
const cors = require('cors');
const tools = require('./routes/tools');
const mongoose= require('mongoose');
const port = 5000;

////

const app= express();
app.use(express.json());
app.use(cors());
app.use('/api/auth',auth);
app.use('/api/tools',tools);
// app.use('content-type','Json');

app.get('/',(req,res)=>{
    res.send("Hey Welcome ");
});
 
// Connet_to_mongoose();
// app.listen(port,()=>{
//     console.log("Starting.....")
// })
 const func= async()=>{
    await mongoose.connect('mongodb+srv://arvindmali9589:tQ61u9ruTm5DadZ9@cluster0.veyar3w.mongodb.net/?retryWrites=true&w=majority');
     console.log("connecting");
     app.listen(port,()=>{
        console.log("Starting.....")
    })
 }

 func();


