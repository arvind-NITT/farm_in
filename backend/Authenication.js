const jwt = require("jsonwebtoken");
require('dotenv').config();
const privatekey= process.env.Private_key;
import { useNavigate } from "react-router-dom";
const Authentication = async (req, res, next) => {
  const navigate = useNavigate();
    console.log(privatekey)
  //get the user form jwt token and addit to req body
  const token =await req.header("auth-token");
  // console.log(token)  
  if (!token) {
    navigate("/");
    res.status(401).send({ error: "Token Not found" });

  }
  try {
    const data =await jwt.verify(token, privatekey);
    req.user = data;
    console.log(data);
    next();
  
  } catch (error) {
    console.log(error);
    // res.send({ error: error });
    navigate("/");
  }
};

module.exports = Authentication;