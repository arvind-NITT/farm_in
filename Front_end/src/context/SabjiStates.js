import React,{useContext,useState} from 'react'
import SabjiContext from './SabjiContext'
const  SabjiStates=(props)=> {
   const [alert,setAlert]=useState(null);
  //  const [allcomponents,setAllCompo]=useState([{name:"",price:"",qauntity:"",veg:""}]);
   const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
     
      setAlert(null);
    }, 2000);
  };
  const [transaction,settransaction]= useState([]);
  const[item,setitem]= useState([]);
  const[customer,setcustomer]= useState([]);
  const[prices,setprices]= useState([]);
  const[veges,setveges]= useState([]);
  const[qaunti,setquanti]= useState([]);
  const [user,set_user]=useState([]);
  // const fetch_itme=async()=>{
  //   const Url='http://localhost:5000/additems/fetchitems';
  //     const data= await fetch(Url,{
  //       method: 'get', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //         "Access-Control-Allow-Origin": "*",
  //         'auth-token': localStorage.getItem('token')
  //       },
  //     })
  //     const items= await data.json();
  //     // console.log(custu.allcustomers[0].name)
  //     // console.log(custu[0]
  //    await setitem(items.all_Item);
  //     console.log(items.all_Item)
  // }
  // const alltransaction=async()=>{
  //   const url= 'http://localhost:5000/additems/groupItem';
  //   const data= await fetch(url,{
  //     method: 'GET', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Access-Control-Allow-Origin": "*",
  //       'auth-token': localStorage.getItem('token')
  //     },
  //   });

  //   const res_data= await data.json();
  //   console.log(res_data);
  //   settransaction(res_data)

  // }
    
  const [setup_data,set_setup_data]= useState([]);
  const [setup_customer,set_setup_customer]= useState([]);
  const [setup_veges,set_setup_veges]= useState([]);
  const [setup_Price,set_setup_Price]= useState([]);
  const [total,settotal]= useState(0);
  const [customertotal,setcustomertotal]= useState(0);
  const [vegtotaltotal,setvegtotal]= useState(0);
 
   const setup= async()=>{
       const url= 'http://localhost:5000/api/tools/sorteddata';
      const response= await fetch(url,{
       method: 'GET', // *GET, POST, PUT, DELETE, etc.
       headers:{
           'Content-Type': 'application/json',
           "Access-Control-Allow-Origin": "*",
           'auth-token':localStorage.getItem('token'),
       }
      })
      const startup_= await response.json();
      console.log(startup_);
     await set_setup_data(startup_.data); 
     await set_setup_customer(startup_.Customerdata)
     await set_setup_veges(startup_.vegdata)
     await set_setup_Price(startup_.Pricedata)
     //  console.log(setup_data)
     setTimeout(()=>{
       let t=0;
       for (let index = 0; index < startup_.data.length; index++) {
         const element = startup_.data[index];
         console.log(element.total)
         
         t= t+element.total
         settotal(t);
         
       } 
       t=0;
       for (let index = 0; index < startup_.Customerdata.length; index++) {
         const element = startup_.Customerdata[index];
         console.log(element.total)
         
         t= t+element.total
         setcustomertotal(t);
         
       }  
       t=0;
       for (let index = 0; index < startup_.vegdata.length; index++) {
         const element = startup_.vegdata[index];
         console.log(element.total)
         
         t= t+element.total
         setvegtotal(t);
         
       }
     },1000)
    
     
   }

   const Delete_by_id=async(id)=>{
    console.log(id)
    const url= `http://localhost:5000/api/tools/dltItems/${id}`;
    const response= await fetch(url,{
     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     headers:{
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*",
     },
     
    })
    const startup_= await response.json();
    console.log(startup_); 
    setup();   
    console.log("deleted")
  }
  const Delete_by_date=async(date)=>{
    console.log(date)
    const url= 'http://localhost:5000/api/tools/dltItem';
    const response= await fetch(url,{
     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     headers:{
         'Content-Type': 'application/json',
         "Access-Control-Allow-Origin": "*",
     },
     body: JSON.stringify({date:date})
    })
    const startup_= await response.json();
    console.log(startup_); 
    setup();   
    console.log("deleted")
  }



  const additem=async (element)=>{
    const url= 'http://localhost:5000/api/tools/addItem';
    console.log("in add item ",element.date )
    const data= await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify(
        {
        "ItemName":element.vegname,
        "CustomerName":element.name,
        "Quantity":element.quantity,
        "price":element.price,
        "date":element.date  
    }
   
    ),
    })
    const newcustomer= await data.json();
    // console.log(newcustomer.newitem.date.slice(0,10));
    // setcustomer(customer.concat(newcustomer.new_customer))
    showAlert("item Added","success")
  }

//   const Fetch_all_components=async()=>{
//     try {
//       const Url_to_customer='http://localhost:5000/add/getcustomer';
//       const datacust= await fetch(Url_to_customer,{
//         method: 'get', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Origin": "*",
//           'auth-token': localStorage.getItem('token')
//         },
//       })
//       const custu= await datacust.json();
//       // console.log(custu.allcustomers[0].name)
//       // console.log(custu[0]
//      setcustomer(custu);
    
//       // customer.forEach((element)=>{
//       //     console.log(element)
//       // })
//   //     let arr_cust= custu.array();
//   // console.log(arr_cust);
// //  await custu.forEach((element)=>{
// //        console.log(element)
// //   })
// // for (let index = 0; index < custu.length; index++) {
// //   const element = custu[index];
// //   console.log(element)
  
// // }
//       const Url_to_Price='http://localhost:5000/add/getprices';
//       const dataprice= await fetch(Url_to_Price,{
//         method: 'get', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Origin": "*",
//           'auth-token': localStorage.getItem('token')
//         },
//       })
//       const pricu= await dataprice.json();
//     //  console.log(pricu)
//   setprices(pricu)
// //  console.log(prices)
//       const Url_to_veg='http://localhost:5000/add/getVeges';
//       const dataveg= await fetch(Url_to_veg,{
//         method: 'get', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Origin": "*",
//           'auth-token': localStorage.getItem('token')
//         },
//       })
//       const veju= await dataveg.json();
//       console.log(veju);
//    setveges(veju)

//       const Url_to_qauntities='http://localhost:5000/add/getqauntities';
//       const dataquanta= await fetch(Url_to_qauntities,{
//         method: 'get', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Origin": "*",
//           'auth-token': localStorage.getItem('token')
//         },
//       })
//       const quantu= await dataquanta.json();
//       // console.log(quantu);
//       setquanti(quantu);
//       // console.log(customer)

//       // for (let index = 0; index < customer.length; index++) {
//       //   const ele = customer[index];
//       //   let arvind=0;
//       //    console.log(ele)
//       //    for (let i = 0; i < item.length; i++) {
//       //     const element = item[i];
//       //       if(element.CustomerName===ele.name)
//       //       {
//       //         arvind+=element.price * element.Quantity
//       //         console.log(arvind)
//       //       }
//       //    }
//       //    let data={
//       //      "name":ele.name,
//       //      "total_purchase":arvind
//       //    } 
//       //  await set_user(user.push(data));
//       //  }
//   // arrangedata();
//     } catch (error) {
      
//     }
//   }
  const add_customer=async(name)=>{
    const url= 'http://localhost:5000/api/tools/addCustomer';
    
    const data= await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({customer:name}),
    })
    const newcustomer= await data.json();
    setcustomer(customer.concat(newcustomer.new_customer));
    showAlert("Customer Added","success")
  }
  const detetecustomer=async(id)=>{
    console.log(id)
    const url= `http://localhost:5000/api/tools/dltCustomer/${id}`;
    
    const data= await fetch(url,{
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    
    })
    const deletecust= await data.json();
    // console.log(deletecust);
    setcustomer(customer.filter((customer)=>{return customer._id!==id}));
    showAlert("Customer deleted","success")
  }
  // /api/tools
  const add_price=async(price)=>{
    const url= 'http://localhost:5000/api/tools/addPrice';
      // console.log(price)
    const data= await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({Price:price}),
    })
    const newprices= await data.json();
    setprices(prices.concat(newprices.new_price));
    showAlert("new_price Added","success")
  }
  const deteteprice=async(id)=>{
    // console.log(id)
    const url= `http://localhost:5000/api/tools/dltprice/${id}`;
    
    const data= await fetch(url,{
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    
    })
    const deleteprice= await data.json();
    // console.log(deleteprice);
    setprices(prices.filter((prices)=>{return prices._id!==id}));
    showAlert("Price deleted","success")
  }
  const add_veges=async(vegname)=>{
    const url= 'http://localhost:5000/api/tools/addveges';
    
    const data= await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({veg:vegname}),
    })
    const newveges= await data.json();
    setveges(veges.concat(newveges.new_veg));
    showAlert("new_veg Added","success")
  }
  const deteteveges=async(id)=>{
    // console.log(id)
    const url= `http://localhost:5000/api/tools/dltVeges/${id}`;
    
    const data= await fetch(url,{
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    
    })
    const deleteveg= await data.json();
    // console.log(deleteveg);
    setveges(veges.filter((veges)=>{return veges._id!==id}));
    showAlert("veg deleted","success")
  }
  const add_Quanta=async(qauntities)=>{
    const url= 'http://localhost:5000/api/tools/addQuantity';
    
    const data= await fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({qauntities:qauntities}),
    })
    const newqauntities= await data.json();
    setquanti(qaunti.concat(newqauntities.new_quantity));
    showAlert("new_quantity Added","success")
  }
  const detetequanta=async(id)=>{
    // console.log(id)
    const url= `http://localhost:5000/api/tools/dltQuantity/${id}`;
    
    const data= await fetch(url,{
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    
    })
    const deleteqaunti= await data.json();
    // console.log(deleteqaunti);
    setquanti(qaunti.filter((qaunti)=>{return qaunti._id!==id}));
    showAlert("qauntity deleted","success")
  }


  // const arrangedata=async()=>{
  // //   await console.log(customer)
  // //  for (let index = 0; index < customer.length; index++) {
  // //       const ele = customer[index];
  // //       let arvind=0;
  // //        console.log(ele)
  // //        for (let i = 0; i < item.length; i++) {
  // //         const element = item[i];
  // //           if(element.CustomerName===ele.name)
  // //           {
  // //             arvind+=element.price * element.Quantity
  // //             console.log(arvind)
  // //           }
  // //        }
  // //        let data={
  // //          "name":ele.name,
  // //          "total_purchase":arvind
  // //        } 
  // //       //  if(user.length===0)
  // //     await set_user(user.push(data));
  // //     //  else
  // //     //  set_user(user.concat(data));
  // //      }
  // // console.log("in arrange data");
  // // console.log("User is "+ user)
  // }
  //
  return (
   <SabjiContext.Provider value={{showAlert,setup,set_setup_data,transaction,settransaction,user,additem,item,prices,veges,qaunti,alert,setquanti,detetecustomer,customer,setcustomer,add_customer,add_price,setveges,deteteprice,add_veges,deteteveges,add_Quanta,detetequanta,set_user}}>
     {props.children}
   </SabjiContext.Provider>
  ) 
}

export default SabjiStates
