import React, { useEffect, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SabjiContext from "../context/Contexts";
import VerticalNavbar from "./VerticalNavbar";
import Style from "./Styles1.css"
import Horizontalnav from "./Horizontalnav";
// import Alert from './Alert';
// import Veges from './Veges';
export default function Item() {
  const navigate = useNavigate();
  const [data, set_data] = useState(null);
  const [custome, set_custome] = useState(false);
  const [count, set_count] = useState(1);
  const [total_, set_total] = useState("");
  const [collecteddata, set_collecteddata] = useState([]);
  // let x= document.getElementById('price')
  // let y= document.getElementById('Quanta')

  const ref = useRef();
  const [i, seti] = useState(0);
  const tableref = useRef();
  const context = useContext(SabjiContext);
  const {
    
    additem,
    setup,
    customer,
    Fetch_all_components,
    veges,
    showAlert,
  } = context;

  useEffect(() => {
    setup();
    Fetch_all_components();
    // arrangedata();
    // eslint-disable-next-line
  }, []);
  const addcust = () => {
    ref.current.click();
  };
  const onchange = (e) => {
    set_data({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  // const onsubmit = async () => {
  //   add_price(data.name);
  //   closeref.current.click();
  // }
  //  const add_row=(element)=>{
  //   var table = document.getElementById("table");
  //         var row = table.insertRow(0);
  //         var cell1 = row.insertCell(0);
  //         var cell2 = row.insertCell(1);
  //         var cell3 = row.insertCell(2);
  //         var cell4 = row.insertCell(3);
  //         cell1.innerHTML = `<td className="table-warning">
  //         <div className="form-floating">
  //           <select className="form-select" aria-label="Default select example" name="category1"
  //             id="category1" required>

  //             ${customer.map((element) => {
  //               return <option value={element.name}>{element.name}</option>
  //             })

  //             }

  //           </select>
  //           <label htmlFor="floatingInput">Customer</label>
  //         </div>
  //       </td>`;
  //         cell2.innerHTML = `<td className="table-warning">
  //         <div className="form-floating">
  //           <select className="form-select" aria-label="Default select example" name="category1"
  //             id="category1" required>

  //             ${veges.map((element) => {
  //               return <option value={element.Vegname}>{element.Vegname}</option>
  //             })

  //             }

  //           </select>
  //           <label htmlFor="floatingInput">vegetable</label>
  //         </div>
  //       </td>`;
  //         cell3.innerHTML = "Cell3";
  //         cell4.innerHTML = "Cell4";
  //  }
  const add_row = async () => {
    var row = document.getElementById("row1");

    var table = document.getElementById("table");
    var rowclone = row.cloneNode(true);
    rowclone.id = count;
    console.log(count);
    table.appendChild(rowclone);
    //  additem();
    // collect_data();
    // console.log(data);
    await set_count(count + 1);
    // set_data(x.value*y.value)
  };
  function delete_row() {
    console.log(count);
    var table = document.getElementById("table");
    console.log("id ", table.lastChild);
    table.deleteRow(count);
    set_count(count - 1);
  }

  const collect_data = async () => {
    // var date= new Date;}
    // console.log(date.toLocaleDateString())
    // console.log(date.getDate(),date.getMonth()+1,date.getFullYear())
    // let realdate= date.getDate()+'-'+(date.getMonth()+1).toString()+'-'+date.getFullYear();
    // console.log(realdate)
    // var realdate= date.toLocaleDateString()
    let realdate;
    var flag= false;
    if (custome) {
      let firstdate = document.getElementById("customedate");
      console.log(firstdate.value);
      let s = firstdate.value;
      let cust_date = s.replace(/-/g, "/");
      console.log(cust_date);
      realdate = cust_date;
    } else {
      let date= new Date();
      let year = date.getFullYear();
      let month= date.getMonth()+1;
      let day= date.getUTCDate();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
 
      realdate = year + "/" + month + "/" + day;
      console.log(day, month, year, realdate);
    }
    console.log(realdate);
    var ele = document.getElementsByTagName("select");
    // var ele_input = document.getElementById("Quanta");
    var ele_input = document.getElementsByTagName("input");
    var ele_input_price = document.getElementById("price");
    console.log(ele.length);
    const size = await ele.length;
    for (let index = 0; index < size; index++) {
      const element = ele[index];
      console.log(element.value);
      let one = ele[index].value;
      
      var three =parseFloat(ele_input[index+1].value) ;
      index++;
      let two = ele[index].value;
     
      
      let four =parseFloat(ele_input[index+1].value);
      console.log(one, two, three, four);
      if(isNaN(three) || isNaN(four)){
        console.log("Flag true");
        showAlert("Please Fill all the required values","danger");
       //  navigate("/transactions");
       flag= true;
       break;
   }
      total += three * four;
      const data_ = {
        Customer: one,
        veg: two,
        Quantity: three,
        Price: four,
        date: realdate
      };
     console.log(data_);
      set_collecteddata(collecteddata.push(data_));
      console.log(collecteddata);
    }
    for (let index = 0; index < collecteddata.length; index++) {
      const element = collecteddata[index];
    if(flag)
     break;
      await additem(element);
    }
    if(!flag)
    navigate("/transactions");
  };

  let total = 0;
  let qua_map= new Map();



  const showdetail = async () => {
    var date = new Date();
    console.log(date.toLocaleDateString());
    var ele = document.getElementsByTagName("select");
    // var ele_input = document.getElementById("Quanta");
    var ele_input = document.getElementsByTagName("input");
    // var ele_input_price = document.getElementById("price");
    console.log(ele.length);
    const size = await ele.length;
  var flag= false;
    for (let index = 0; index < size; index++) {
      const element = ele[index];
      console.log(element.value);
      let one = ele[index].value;
      
      var three =parseFloat(ele_input[index+1].value) ;
      index++;
      let two = ele[index].value;
     
      
      let four =parseFloat(ele_input[index+1].value);
      console.log(one, two, three, four);
      if(isNaN(three) || isNaN(four)){
        console.log("Flag true");
        showAlert("Please First Fill all the required values","danger");
       //  navigate("/transactions");
       flag= true;
       break;
   }
      total += three * four;
      if(qua_map[four])
      qua_map[four]+=three;
      else{
        qua_map[four]=three;
      }
      // const data_ = {
      //   name: one,
      //   vegname: two,
      //   price: three,
      //   quantity: four,
      // };
      //   set_collecteddata(collecteddata.push(data_));
        console.log(qua_map)
    }
    let text= " hello";
    qua_map.forEach(function(value,key){
      console.log(key,value)
     text +=  key + " * " + value + " = " + "<br/>"
     })
    //
    //  for (let index = 0; index < collecteddata.length; index++) {
    //   const element = collecteddata[index];
    //     total+= element.price * element.quantity;
    // }
    if(!flag)
    set_total(total);
    console.log(total);
  };
  const customDate = () => {
    let firstdate = document.getElementById("customedate");
    // let seconddate = document.getElementById("to");
    console.log(firstdate.value);
    let s = firstdate.value;
    // let d = seconddate.value;
    let date = s.replace(/-/g, "/"); 
    // let to = d.replace(/-/g, "/");
    set_custome(true);
    console.log(date);
  };
  return ( 
   
    <div className="min-vh-100 m-0 p-0"  style={ Style }>
        <div className="row  main m-0 p-0" style={Style}>
        <div  className=" mw-100 p-0 st m-0 p-0" >
            {/* <VerticalNavbar /> */}
        <Horizontalnav/>
          </div> 

            {/* <div className="row row-cols-1   col-7  m-4 "> */}
            <div className="col-12 min-vh-100 m-0 p-0">
            <div className="row mw-100 p-0 m-0">
            <div className="col-12  m-0 p-0 ">
                  <div className=" d-flex justify-content-center mt-4">
                    <img
                      src={require("./images/7948106.png")}
                      alt=""
                      width="350px"
                      height="300px"
                    />
                  </div>
                </div>
                <div className="col mt-5 container">
                  {/* <div className="container d-flex justify-content-center"> <button className="btn btn-primary" onClick={addcust}>Add New price</button></div> */}
                  <div className="col-10  container  fluid">
                    <div className="row">
                      <div className="container d-flex justify-content-around  m-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: "200px", height: "60px" }}
                          onClick={add_row}
                        >
                          Add New row
                        </button>
                        <div className="m-2 d-flex justify-content-center align-items-center" style={{ height: "50px" , width:"300px" }}>                  
                            Date: <input
                            type="date"
                            id="customedate"
                            name="customedate"    />
                          <button
                            className="btn m-1 btn-secondary "
                            onClick={customDate}
                          >
                        change date
                          </button>
                        </div>
                      </div>
                      <table ref={tableref} id="table">
                        <thead>
                          <tr className="text-center">
                            <th className="m-2">Customer</th>
                            <th className="m-2">ItemName</th>
                            <th className="m-2">Quantity</th>
                            <th className="m-2">Price</th>
                          </tr>        
                        </thead>
                        {/* <tbody className="min-vw-50 "> */}
                        <tr ref={ref} id="row1">
                          <td className="table-warning">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                name="category1"
                                id="category1"
                                required
                              >
                                {customer.map((element) => {
                                  return (
                                    <option value={element.name}>
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <label htmlFor="floatingInput">Customer</label> */}
                            </div>
                          </td>
                          <td className="table-warning">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                name="category1"
                                id="category1"
                                required
                              >
                                {veges.map((element) => {
                                  return (
                                    <option value={element.name}>
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <label htmlFor="floatingInput">vegetable</label> */}
                            </div>
                          </td>
                          <td className="table-warning">
                            <div className="form-floating">
                            
                              <input className="form-select"
                                aria-label="Default select example"
                                name="Quanta"
                                id="Quanta"
                                required 
                                type="text"></input>
                              {/* <label htmlFor="floatingInput">Quantity</label> */}
                            </div>
                          </td>
                          <td className="table-warning">
                            <div className="form-floating">
                           
                                <input  
                                className="form-select"
                                aria-label="Default select example"
                                name="price"
                                id="price"
                                required
                                type="text"
                                 ></input>
                              {/* <label htmlFor="floatingInput">Price</label> */}
                            </div>
                          </td>
                        
                        </tr>
                        {/* </tbody> */}
                      </table>
                      <div className="container d-flex justify-content-between mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: "150px", height: "60px" }}
                          onClick={collect_data}
                        >
                          Submit{" "}
                        </button>
                        <button
                          className="btn btn-primary"
                          disabled={count === 1 ? true : false}
                          style={{ width: "150px", height: "60px" }}
                          onClick={delete_row}
                        >
                          Delete Row
                        </button>
                      </div>
                      <div className="container d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: "150px", height: "60px" }}
                          onClick={showdetail}
                        >
                          show details{" "}
                        </button>
                        { total_ && (
                          <div
                            className="container d-flex justify-content-center align-items-center border border-dark rounded-pill"
                            style={{
                              width: "150px",
                              height: "60px",
                              background: "darkgray",
                            }}
                          >
                       
                            Total = {total_}
                          </div>
                        )}
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 

     */}
          </div>
        </div>
     
  );
}
