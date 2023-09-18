const express = require("express");
const AuthenticateUser = require("../Authentication");
const mongoose = require('mongoose');
const User = require("../models/User");
const Item = require("../models/Item");
const Customer = require("../models/Customer");
const Price = require("../models/Price");
const Quantity = require("../models/Quantity");
const Veges = require("../models/Veges");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jWT_SECRETE_CODE = "fINALLY WE CALL FROM COLLEGE";
const ObjectId = mongoose.Types.ObjectId;
router.post("/addCustomer", AuthenticateUser, async (req, res) => {
  // const user= req.body.found.id;
  console.log(req.user.found.id);
  const { name, date } = req.body;
  const t = await Customer.create({
    user: req.user.found.id,
    name: name,
    date: date,
  });
  const newcustomer = await t.save();
  console.log(newcustomer);
  res.send(newcustomer);
});
 

router.get("/FetchCustomer", AuthenticateUser, async (req, res) => {
  // const username=  await User.find()
  const Allcustomer = await Customer.find({ user: req.user.found.id });
  const usermy= await User.findById(req.user.found.id);
  console.log(Allcustomer);
  res.send({Allcustomer,user:usermy});
});

router.delete("/dltCustomer", async (req, res) => {
  let success= false;
  const {name,userid}= req.body;
  await Customer.findByIdAndDelete(req.name);
    const AllItem = await Customer.find({ name: name });
  console.log(AllItem);
  for (let index = 0; index < AllItem.length; index++) {
    const element = AllItem[index];
    const dlet = await Customer.findByIdAndDelete(element._id);
    console.log(dlet);
  }
  console.log(name,userid,"print H ");
  const data= await Item.find({user:userid,Customer:name});
  console.log(data);
  // res.send(dlt);
  // const {name}= req.body;
  // console.log(name)

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const dlet = await Item.findByIdAndDelete(element._id);
    console.log(dlet);
  }
  // const dlt = await Item.findByIdAndDelete(data._id);
  // console.log(dlt);
  let dlt=true;
  success=true
  res.send({dlt,success});
});
router.post("/addPrice", AuthenticateUser, async (req, res) => {
  // const user= req.body.found.id;
  console.log(req.user.found.id);
  const { name, date } = req.body;
  const t = await Price.create({
    user: req.user.found.id,
    name: name,
    date: date,
  });
  const newprice = await t.save();
  console.log(newprice);
  const Allprice = await Price.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    //        {  $group: {
    //     _id: "$veg",
    //     item: {
    //       $push: {
    //         Customer: "$Customer",
    //         date: "$date",
    //         Price: "$Price",
    //         Quantity: "$Quantity",
    //         Total: "$Total", 
    //       },
    //     },
    //     total: { $sum: "$Total" },
    //     total_quantity: { $sum: "$Quantity" },
    //   }
    // },
    {
      $sort: { name: 1 },
    }
  ]);
  console.log(Allprice);
  res.send(Allprice);
  // res.send(newprice);
});

router.get("/Fetchprice", AuthenticateUser, async (req, res) => {
  const Allprice = await Price.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    //        {  $group: {
    //     _id: "$veg",
    //     item: {
    //       $push: {
    //         Customer: "$Customer",
    //         date: "$date",
    //         Price: "$Price",
    //         Quantity: "$Quantity",
    //         Total: "$Total", 
    //       },
    //     },
    //     total: { $sum: "$Total" },
    //     total_quantity: { $sum: "$Quantity" },
    //   }
    // },
    {
      $sort: { name: 1 },
    }
  ]);
  console.log(Allprice);
  res.send(Allprice);
});


router.delete("/dltprice/:id", async (req, res) => {
  let success= false;
  // const {name}= req.body;
  // const AllItem = await Price.find({ name: name });
  // console.log(AllItem);
  // const dlt = await Price.findByIdAndDelete(AllItem._id);
  // console.log(dlt);
  const dlt = await Price.findByIdAndDelete(req.params.id);
  console.log(dlt);
  success=true
  res.send({dlt,success});
  // res.send(dlt);
});
router.post("/addveges", AuthenticateUser, async (req, res) => {
  // const user= req.body.found.id;
  console.log(req.user.found.id);
  const { name, date } = req.body;
  const t = await Veges.create({
    user: req.user.found.id,
    name: name,
    date: date,
  });
  const newVeges = await t.save();
  console.log(newVeges);
  res.send(newVeges);
});

router.get("/FetchVeges", AuthenticateUser, async (req, res) => {
  const AllVeges = await Veges.find({ user: req.user.found.id });
  console.log(AllVeges);
  res.send(AllVeges);
});

router.delete("/dltVeges", async (req, res) => {
  let success= false;
  const {name,userid}= req.body;
  await Veges.findByIdAndDelete(req.name);
    const AllItem = await Veges.find({ name: name });
  console.log(AllItem);
  for (let index = 0; index < AllItem.length; index++) {
    const element = AllItem[index];
    const dlet = await Veges.findByIdAndDelete(element._id);
    console.log(dlet);
  }
  console.log(name,userid,"print H ");
  const data= await Item.find({user:userid,veg:name});
  console.log(data);
  // res.send(dlt);
  // const {name}= req.body;
  // console.log(name)

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const dlet = await Item.findByIdAndDelete(element._id);
    console.log(dlet);
  }
  // const dlt = await Item.findByIdAndDelete(data._id);
  // console.log(dlt);
  let dlt=true;
  success=true
  res.send({dlt,success});
  // res.send(dlt);
});
router.post("/addQuantity", AuthenticateUser, async (req, res) => {
  // const user= req.body.found.id;
  console.log(req.user.found.id);
  const { name, date } = req.body;
  const t = await Quantity.create({
    user: req.user.found.id,
    name: name,
    date: date,
  });
  const newQuantity = await t.save();
  const AllQuantity =await Quantity.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    //        {  $group: {
    //     _id: "$veg",
    //     item: {
    //       $push: {
    //         Customer: "$Customer",
    //         date: "$date",
    //         Price: "$Price",
    //         Quantity: "$Quantity",
    //         Total: "$Total", 
    //       },
    //     },
    //     total: { $sum: "$Total" },
    //     total_quantity: { $sum: "$Quantity" },
    //   }
    // },
    {
      $sort: { name: 1 },
    }
  ]);
  // console.log(newQuantity);
  // res.send(newQuantity);
  console.log(AllQuantity);
  res.send(AllQuantity);
});

router.get("/FetchQuantity", AuthenticateUser, async (req, res) => {
  const AllQuantity =await Quantity.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    //        {  $group: {
    //     _id: "$veg",
    //     item: {
    //       $push: {
    //         Customer: "$Customer",
    //         date: "$date",
    //         Price: "$Price",
    //         Quantity: "$Quantity",
    //         Total: "$Total", 
    //       },
    //     },
    //     total: { $sum: "$Total" },
    //     total_quantity: { $sum: "$Quantity" },
    //   }
    // },
    {
      $sort: { name: 1 },
    }
  ]);
  console.log(AllQuantity);
  res.send(AllQuantity);
});

router.delete("/dltQuantity/:id", async (req, res) => {
  let success= false;
  // const {name}= req.body;
  // const AllItem = await Quantity.find({ name: name });
  // console.log(AllItem);
  // const dlt = await Quantity.findByIdAndDelete(AllItem._id);
  // console.log(dlt);
  const dlt = await Quantity.findByIdAndDelete(req.params.id);
  console.log(dlt);
  success=true
  res.send({dlt,success});
  // res.send(dlt);
});
router.post("/addItem", AuthenticateUser, async (req, res) => {
  // const user= req.body.found.id;
  console.log(req.user.found.id);
  const { Customer, veg, Quantity, Price, date } = req.body;
  const total = Quantity * Price;
  const t = await Item.create({
    user: req.user.found.id,
    Customer: Customer,
    veg: veg,
    Quantity: Quantity,
    Price: Price,
    Total: total,
    date: date,
    // inputdate:dt
  });
  const newItem = await t.save();
  console.log(newItem);
  res.send(newItem);
});

router.get("/FetchItem", AuthenticateUser, async (req, res) => {
  const AllItem = await Item.find({ user:req.user.found.id });
  console.log(AllItem);
  res.send(AllItem);
});

router.delete("/dltItems/:id", async (req, res) => {
  
  const AllItem = await Item.findByIdAndDelete(req.params.id);
  console.log(AllItem);

res.send(AllItem)})
  
router.delete("/dltItem", async (req, res) => {
  let success= false;
  const {date}= req.body;
  const AllItem = await Item.find({ date: date });
  console.log(AllItem);
  // res.send(AllItem);
  for (let index = 0; index < AllItem.length; index++) {
    const element = AllItem[index];
    const dlt = await Item.findByIdAndDelete(element._id);
    console.log(dlt);
  }
  success=true;
  res.send({date,success});
});


router.get('/groupbyitem',AuthenticateUser,async(req,res)=>{
  console.log("request recieved",req.user.found.id)
  const data = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id:"$date",
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            Price: "$Price",
            Quantity: "$Quantity",
            Total: "$Total",
          },
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
      },
    },
    {
      $sort: { _id: -1 },
    },
  ]);
    // const firstindex= data.findIndex(obj=>{return obj._id>=from});

    //  const secondindex= data.findIndex(obj=>{return obj._id>=to});

    //  const filterdata= [];
    //  if(firstindex!==secondindex)
    //  {  for (let index = firstindex; index <= secondindex; index++) {
    //     const element = data[index];
    //     filterdata.push(element)

    //   }}else{
    //     filterdata.push({'_id':"No data Between Those dates"})
    //   }

    //  console.log(firstindex,secondindex)
    // console.log(filterdata);
    console.log(data);
    res.send(data);
})

router.get("/sorteddata", AuthenticateUser, async (req, res) => {
  console.log(req.user);
  const vegdata = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
           {  $group: {
        _id: "$veg",
        item: {
          $push: {
            Customer: "$Customer",
            date: "$date",
            Price: "$Price",
            Quantity: "$Quantity",
            Total: "$Total", 
          },
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
      }
    },
    {
      $sort: { _id: 1 },
    }
  ]);
  const Customerdata = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id: "$Customer",
        item: {
          $push: {
            date: "$date",
            veg: "$veg",
            Price: "$Price",
            Quantity: "$Quantity",
            Total: "$Total",
          },
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  const data = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id:"$date",
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            Price: "$Price",
            Quantity: "$Quantity",
            Total: "$Total",
          },
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
      },
    },
    {
      $sort: { _id: -1 },
    },
  ]);
  // const Pricedata1 = await Item.aggregate([
  //   { $match:{user: ObjectId(req.user.found.id) }},
  //   {
  //     $group: {
  //       _id: "$Price",
  //       // item: {
  //       //   $push: {
  //       //     Customer: "$Customer",
  //       //     veg: "$veg",
  //       //     date: "$date",
  //       //     Quantity: "$Quantity",
  //       //     Total: "$Total",
  //       //   },
           
  //       // },
  //       total: { $sum: "$Total" },
  //       total_quantity: { $sum: "$Quantity" },
       
  //     },
  //     // $group:{
  //     //   _id:"$date"
  //     // }
  //   },
  //   {
  //     $sort: { _id: -1 },
  //   },
  // ]);
  const Pricedata = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id: {price:"$Price",date:"$date"},
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            date: "$date",
            Quantity: "$Quantity",
            Total: "$Total",
          },
           
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
       
      },
      // $group:{
      //   _id:"$date"
      // }
    },
    {
      $sort: { _id: -1 },
    },
  ]);
  const AllQuantity = await Quantity.find({ user: req.user.found.id });
  // console.log(AllQuantity);
   const usermy= await User.findById(req.user.found.id);

  res.send({ data, Customerdata, vegdata, Pricedata,AllQuantity ,user:usermy });
});
 
router.post("/filterBydate__VEG", AuthenticateUser, async (req, res) => { 
  // const { from, to } = req.body;
   const Pricedata1 = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id: {price:"$Price",date:"$date"},
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            date: "$date",
            Quantity: "$Quantity",
            Total: "$Total",
          },
           
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
       
      },},
      {$group:{
        _id: "$_id.price",
        item: {
          $push: {
            items:"$item",
           
            // Customer: "$Customer",
            // veg: "$veg",
            // date: "$date",
            // Quantity: "$Quantity",
            // Total: "$Total"
          },},
       date:{$push: "$item.date"}
      }},
    
    {
      $sort: { date: -1 },
    },
  ]);
  //    const from= "01/07/2021";
  //    const to= "21/07/2022"
//   var filterdata = [];
//   const firstindex = data.findIndex((obj) => {
//     return obj._id >= from;
//   });

//   let secondindex = data.findIndex((obj) => {
//     return obj._id === to;
//   });
//  if(secondindex!=-1){
//     if (firstindex !== secondindex && firstindex != -1 && secondindex != -1) {
//         for (let index = firstindex; index <= secondindex; index++) {
//           const element = data[index];
//           filterdata.push(element);
//         }
//       } else {
//         filterdata.push({
//           _id: "No data Between Those dates",
//           item: [
//             {
//               Customer: "No Data",
//               veg: "No data",
//               Price: 0,
//               Quantity: 0,
//               Total: 0,
//             },
//           ],
//           total: 0,
//         });
//       }
//  }

//   if (secondindex === -1) {
//     secondindex = data.findIndex((obj) => {
//       return obj._id >= to;
//     });
//     if (secondindex === -1) {
//         filterdata = data;
//       }else 
//    { if (firstindex !== secondindex && firstindex != -1 && secondindex != -1) {
//       for (let index = firstindex; index < secondindex; index++) {
//         const element = data[index];
//         filterdata.push(element);
//       }
//     } else {
//       filterdata.push({
//         _id: "No data Between Those dates",
//         item: [
//           {
//             Customer: "No Data",
//             veg: "No data",
//             Price: 0,
//             Quantity: 0,
//             Total: 0,
//           },
//         ],
//         total: 0,
//       });
//     }}} 
  
 

//   console.log(firstindex, secondindex);
//   console.log(filterdata);
  res.send(Pricedata1);
});
router.post("/filterBydate__VEG", AuthenticateUser, async (req, res) => { 
  // const { from, to } = req.body;
   const Pricedata1 = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id: {price:"$Price",date:"$date"},
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            date: "$date",
            Quantity: "$Quantity",
            Total: "$Total",
          },
           
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
       
      },},
      {$group:{
        _id: "$_id.price",
        item: {
          $push: {
            items:"$item",
           
            // Customer: "$Customer",
            // veg: "$veg",
            // date: "$date",
            // Quantity: "$Quantity",
            // Total: "$Total"
          },},
       date:{$push: "$item.date"}
      }},
    
    {
      $sort: { date: -1 },
    },
  ]);

  res.send(Pricedata1);
});
router.post("/filterBydate__item", AuthenticateUser, async (req, res) => { 
  const { from, to } = req.body;
  const data = await Item.aggregate([
    { $match:{user: ObjectId(req.user.found.id) }},
    {
      $group: {
        _id: "$date",
        item: {
          $push: {
            Customer: "$Customer",
            veg: "$veg",
            Price: "$Price",
            Quantity: "$Quantity",
            Total: "$Total",
          },
        },
        total: { $sum: "$Total" },
        total_quantity: { $sum: "$Quantity" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  //    const from= "01/07/2021";
  //    const to= "21/07/2022"
  var filterdata = [];
  const firstindex = data.findIndex((obj) => {
    return obj._id >= from;
  });

  let secondindex = data.findIndex((obj) => {
    return obj._id === to;
  });
 if(secondindex!=-1){
    if (firstindex !== secondindex && firstindex != -1 && secondindex != -1) {
        for (let index = firstindex; index <= secondindex; index++) {
          const element = data[index];
          filterdata.push(element);
        }
      } else {
        filterdata.push({
          _id: "No data Between Those dates",
          item: [
            {
              Customer: "No Data",
              veg: "No data",
              Price: 0,
              Quantity: 0,
              Total: 0,
            },
          ],
          total: 0,
        });
      }
 }

  if (secondindex === -1) {
    secondindex = data.findIndex((obj) => {
      return obj._id >= to;
    });
    if (secondindex === -1) {
        filterdata = data;
      }else 
   { if (firstindex !== secondindex && firstindex != -1 && secondindex != -1) {
      for (let index = firstindex; index < secondindex; index++) {
        const element = data[index];
        filterdata.push(element);
      }
    } else {
      filterdata.push({
        _id: "No data Between Those dates",
        item: [
          {
            Customer: "No Data",
            veg: "No data",
            Price: 0,
            Quantity: 0,
            Total: 0,
          },
        ],
        total: 0,
      });
    }}} 
  
 

  console.log(firstindex, secondindex);
  console.log(filterdata);
  res.send(filterdata);
});
router.get("/groupbyveg", AuthenticateUser, async (req, res) => {
  const data = await Item.aggregate([
    {
      $group: {
        _id: "$veg",
        total: {
          $sum: "$Total",
        },
      },
    },
  ]);
  console.log(data);
  res.send(data);
});
router.get("/groupbyCustomer", AuthenticateUser, async (req, res) => {
  const data = await Item.aggregate([
    {
      $group: {
        _id: "$Customer",
        total: {
          $sum: "$Total",
        },
      },
    },
  ]);
  console.log(data);
  res.send(data);
});
router.get("/groupbyPrice", AuthenticateUser, async (req, res) => {
  const data = await Item.aggregate([
    {
      $group: {
        _id: "$Price",
        total: {
          $sum: "$Total",
        },
      },
    },
  ]);
  console.log(data);
  res.send(data);
});

router.post("/updatequery",AuthenticateUser,async(req,res)=>{
  try {
  var up= await Item.updateMany(
       { "user": ObjectId("62dd027e4b4aa9486134e840") ,
       "veg" : "sangri" },
      //  "Customer" : "parmanand" },
       { $set: {"veg":"Sangri"} },
      //  { $set: {"Customer":"Parmanand"} },
      //  { upsert: true }
    );
 } catch (e) {
    print(e);
 }
 res.send(up) ;
})

module.exports = router;
// 63ce19745a317972c546241e
// "Arvind mali""Arvind mali""Arvind mali"64008006efec126d594fcb9a