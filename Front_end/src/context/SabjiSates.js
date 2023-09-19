import SabjiContext from "./Contexts";
import React, { useState } from "react";

let BACKEND_LINK=process.env.BACKEND_LINK;

// import { useNavigate } from "react-router-dom"; 
 
export default function SabjiSates(props) {
  // const navigate = useNavigate(); 
  const [setup_data, set_setup_data] = useState([]);
  const [setup_customer, set_setup_customer] = useState([]);
  const [setup_veges, set_setup_veges] = useState([]);
  const [setup_Price, set_setup_Price] = useState([]);
  const [setup_Quanta, set_setup_Quanta] = useState([]);
  const [total, settotal] = useState(0);
  const [customertotal, setcustomertotal] = useState(0);
  const [vegtotaltotal, setvegtotal] = useState(0);
  const [username, setusername] = useState("");
  const [alert, setAlert] = useState(null);
  const [bardata_labels, setbardata_labels] = useState([]);
  const [bardata, setbardata] = useState([]);
  const [total_Quantity, settotal_Quantity] = useState(null);
  //  const [allcomponents,setAllCompo]=useState([{name:"",price:"",qauntity:"",veg:""}]);
  const username_= username;
  const [transaction, settransaction] = useState([]);
  const [item, setitem] = useState([]);
  const [customer, setcustomer] = useState([]);
  const [prices, setprices] = useState([]);
  const [veges, setveges] = useState([]);
  const [qaunti, setquanti] = useState([]);
  const [bar_veg, set_barveg] = useState([]);
  const [Doughnut_customer, set_Doughnut_customer] = useState([]);
  const [Doughnut_customer_total, set_Doughnut_customer_total] = useState([]);
  const [bar_veg_tot, set_barveg_tot] = useState([]);
  const [month_key, set_month_key] = useState([]);
  const [month_val, set_month_val] = useState([]);
  const [label_for_one_veg_details,set_label_for_one_veg_details]=useState([]);
  const [data_for_one_veg_details,set_data_for_one_veg_details]=useState([]);
  const [name_of_veg,set_name_of_veg]=useState(null);
  const showAlert = (message, type) => {
    console.log("show alert called");
    setAlert({
      message: message,
      type: type,
    });
 console.log(alert)
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };  

  const setup = async () => { 
    const url = `${BACKEND_LINK}/api/tools/sorteddata`;
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
        "auth-token": localStorage.getItem("token"),
      },
    });
    const startup_ = await response.json();
    // console.log(startup_.data); 
    setusername(startup_.user.name);
    await set_setup_data(startup_.data);
    console.log(startup_.Customerdata);
    console.log(startup_.vegdata);
    await set_setup_veges(startup_.vegdata);
    await set_setup_Price(startup_.Pricedata);
    await set_setup_Quanta(startup_.AllQuantity);
    //  console.log(setcustomer)
    var map = {};
   
    
    await set_setup_customer(startup_.Customerdata);
    function addValueToList(key, value) {
        //if the list is already created for the "key", then uses it
        //else creates new list for the "key" to store multiple values in it.
        map[key] = map[key] || 0;
        map[key]+=value;
    }
   
    // startup_.vegdata.f
    // console.log("SetuPdata",setup_data);
    startup_.data.forEach(element => {
        var key=  element._id.slice(0,7);
        var val=element.total;
        // console.log(key,val);
      addValueToList(key,val);
    });
    var month_key1=[];
  var month_val1=[];
     for( let [key,val] of Object.entries(map)){
      console.log(key,val)
      let s= key.split('/');
      if(s[1]==undefined)
      continue;
       let p= s[1] +"/" + s[0];
       month_key1.push(p);
       month_val1.push(val);
     }
     month_key1=month_key1.reverse();
     month_val1=month_val1.reverse();
console.log(month_key1,month_val1);

  set_month_key(month_key1);
  set_month_val(month_val1);
    var bard=[]
    var bard2=[]
    var toatl_quantity=0;
    startup_.Customerdata.map((element) => {
       bard.push(element._id);
       bard2.push(element.total);
       toatl_quantity= toatl_quantity+  element.total_quantity;
    })
    settotal_Quantity(toatl_quantity);
    // console.log(bard);
    setbardata_labels(bard);
    // setbardata(bard2);


    setTimeout(() => {
      let t = 0;
      for (let index = 0; index < startup_.data.length; index++) {
        const element = startup_.data[index];
        // console.log(element.total)

        t = t + element.total;
        settotal(t);
      }
      t = 0;
      for (let index = 0; index < startup_.Customerdata.length; index++) {
        const element = startup_.Customerdata[index];
        // console.log(element.total)

        t = t + element.total;
        setcustomertotal(t);
      }
      t = 0;
      var tt=[];
      var tt1=[];
      for (let index = 0; index < startup_.vegdata.length; index++) {
        const element = startup_.vegdata[index];
        // console.log(element.total)
         tt.push(element.total_quantity);
         tt1.push(element._id);
        t = t + element.total;
        setvegtotal(t);
      }
      console.log(tt1);
      console.log(tt);
      set_barveg(tt1); 
      set_barveg_tot(tt);
    }, 1000);
    
  };
  const Delete_by_id = async (id) => {
    console.log(id);
    const url = `${BACKEND_LINK}/api/tools/dltItems/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const startup_ = await response.json();
    console.log(startup_);
    setup();
    console.log("deleted");
  };
  const Delete_by_date = async (date) => {
    console.log(date);
    const url = `${BACKEND_LINK}/api/tools/dltItem`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ date: date }), 
    });
    const startup_ = await response.json();
    console.log(startup_);
    setup();
    console.log("deleted");
  };

  const additem = async (element) => {
    const url = `${BACKEND_LINK}/api/tools/addItem`;
    console.log("in add item ", element.date);
    const data = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "veg": element.veg,
        "Customer": element.Customer,
        "Quantity": element.Quantity,
        "Price": element.Price,
        "date": element.date,
      }),
    });
    const newcustomer = await data.json();
    // console.log(newcustomer.newitem.date.slice(0,10));
    // setcustomer(customer.concat(newcustomer.new_customer))
    showAlert("item Added", "success");
  };

  const Fetch_all_components = async () => {
    setusername(username_)
    // try {
      const Url_to_customer = `${BACKEND_LINK}/api/tools/FetchCustomer`;
      const datacust = await fetch(Url_to_customer, {
        method: "get", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const custu = await datacust.json();
      // console.log(custu.allcustomers[0].name)
      console.log(custu)
     await setcustomer(custu.Allcustomer);
     await setusername(custu.user.name)


     custu.Allcustomer.forEach((element)=>{
          console.log(element)
      })
      //     let arr_cust= custu.array();
      // console.log(arr_cust);
      //  await custu.forEach((element)=>{
      //        console.log(element)
      //   })
      // for (let index = 0; index < custu.length; index++) {
      //   const element = custu[index];
      //   console.log(element)

      // }
      const Url_to_Price = `${BACKEND_LINK}/api/tools/Fetchprice`;
      const dataprice = await fetch(Url_to_Price, {
        method: "get", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const pricu = await dataprice.json(); 
      //  console.log(pricu)
      setprices(pricu);
      //  console.log(prices)
      const Url_to_veg = `${BACKEND_LINK}/api/tools/FetchVeges`;  
      const dataveg = await fetch(Url_to_veg, {
        method: "get", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const veju = await dataveg.json();
      console.log(veju);
      setveges(veju);

      const Url_to_qauntities = `${BACKEND_LINK}/api/tools/FetchQuantity`;
      const dataquanta = await fetch(Url_to_qauntities, {
        method: "get", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const quantu = await dataquanta.json();
      // console.log(quantu);
      setquanti(quantu);
      // console.log(customer)

      // for (let index = 0; index < customer.length; index++) {
      //   const ele = customer[index];
      //   let arvind=0;
      //    console.log(ele)
      //    for (let i = 0; i < item.length; i++) {
      //     const element = item[i];
      //       if(element.CustomerName===ele.name)
      //       {
      //         arvind+=element.price * element.Quantity
      //         console.log(arvind)
      //       }
      //    }
      //    let data={
      //      "name":ele.name,
      //      "total_purchase":arvind
      //    }
      //  await set_user(user.push(data));
      //  }
      // arrangedata();
    // } catch (error) {
    //   // navigate("/");
    // }
  };
  const add_customer = async (name,date) => {
 
    var element={
      "veg":"demo",
      "Customer":name,
      "Quantity":"0",
      "Price":"0",
      "date":date

    }
    const url = `${BACKEND_LINK}/api/tools/addItem`;
    // console.log("in add item ", element.date);
    const data = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "veg": element.veg,
        "Customer": element.Customer,
        "Quantity": element.Quantity,
        "Price": element.Price,
        "date": element.date,
      }),
    });
    const newcustomer = await data.json();
    // console.log(newcustomer.newitem.date.slice(0,10));
    // setcustomer(customer.concat(newcustomer.new_customer))
    showAlert("item Added", "success");
    setup();
    const url1 = `${BACKEND_LINK}/api/tools/addCustomer`;
    console.log(name);
    const data1 = await fetch(url1, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name: name,date:date }),
    });
    const newcustomer1 = await data1.json();
    await setcustomer(customer.concat(newcustomer1));
    Fetch_all_components();
    showAlert("Customer Added", "success");
  //  } catch (error) {
     
  //  }  
  };
  const detetecustomer  = async (id) => {
        let name="" ;
        customer.forEach((element)=>{
          console.log(element);
          if(element.name===id){
            name=element.user;
            
          } 
      })  

    console.log(name,id);
    const url = `${BACKEND_LINK}/api/tools/dltCustomer`;

    const data = await fetch(url, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({"name" : id,"userid":name})
    });
    const deletecust = await data.json();
    console.log(deletecust);
    setcustomer(
      customer.filter((customer) => { 
        return customer._id !== id;
      })
    );
    showAlert("Customer deleted", "success");
    setup();
  };

  const add_veges = async (vegname,date) => {
    var element={
      "veg":vegname,
      "Customer":"Demo",
      "Quantity":"0",
      "Price":"0",
      "date":date

    }
    const url = `${BACKEND_LINK}/api/tools/addItem`;
    // console.log("in add item ", element.date);
    const data = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "veg": element.veg,
        "Customer": element.Customer,
        "Quantity": element.Quantity,
        "Price": element.Price,
        "date": element.date,
      }),
    });
    const newcustomer = await data.json();
    const url1 = `${BACKEND_LINK}/api/tools/addveges`;

    const data1 = await fetch(url1, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name: vegname,date:date }),
    });
    const newveges = await data1.json();
    setveges(veges.concat(newveges));
    setup();
    showAlert("new_veg Added", "success");
  };
  const deteteveges = async (id) => {
    // console.log(id)
  let name="" ;
        veges.forEach((element)=>{
          console.log(element);
          if(element.name===id){
            name=element.user;
            
          } 
      })  

    console.log(name,id);

    const url = `${BACKEND_LINK}/api/tools/dltVeges`;

    const data = await fetch(url, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
   body: JSON.stringify({"name" : id,"userid":name})
    });
    const deleteveg = await data.json();
    // console.log(deleteveg);
    setveges(
      veges.filter((veges) => {
        return veges._id !== id;
      })
    );
    showAlert("veg deleted", "success");
      setup();
  };


  return ( 
    <SabjiContext.Provider
      value={{
        set_label_for_one_veg_details,
        set_data_for_one_veg_details,
        name_of_veg,
        set_name_of_veg,
        label_for_one_veg_details,
        data_for_one_veg_details,
        month_key,
        month_val,
        bar_veg,
        bar_veg_tot,
        total_Quantity,
        bardata,
        bardata_labels,
        username,
        setusername,
        Delete_by_id,
        add_veges,
      
        setup_customer,
        setup_veges,
     
      
        setup,
        additem,
        deteteveges,
        customer,
        veges,
        qaunti,
        prices,
        set_setup_data,
        Delete_by_date,
        setup_Price,
        setup_data,
        add_customer,
        Fetch_all_components,
        setup_customer,
        setup_veges,
        setup_Quanta,
        settotal,
        setup_Price,
        total,
        customertotal,
        vegtotaltotal,
        detetecustomer,
        showAlert,
        alert
      }}
    >
      {props.children}
    </SabjiContext.Provider>
  );
}
