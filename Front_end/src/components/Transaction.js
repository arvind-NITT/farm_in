import React, { useEffect, useContext, useState, Children } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
// import SabjiSates from "../context/SabjiSates";
import { useScrollBy } from "react-use-window-scroll";

import SabjiContext from "../context/Contexts";
import VerticalNavbar from "./VerticalNavbar";
import VeticalNavbar from "./VeticalNavbar";
import Horizontalnav from "./Horizontalnav";
import Loader from "./Loader"
import Style from "./Styles1.css"
let BACKEND_LINK=process.env.BACKEND_LINK;
export default function Transaction() {
  ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
    const context = useContext(SabjiContext);
    const { month_key,month_val, setup_data, set_setup_data, setup, total,settotal,Delete_by_date,Fetch_all_components,showAlert } = context;
    const [Loading, setLoading] = useState(false);
    const Scrollby= useScrollBy();
    // let datedata= null; 
    console.log(month_key);
    const fetchbydate = async () => {    
      setLoading(true);
      let firstdate = document.getElementById("from");
      let seconddate = document.getElementById("to");
      console.log(firstdate.value, seconddate.value);
      let s = firstdate.value;
      let d = seconddate.value;
      let from = s.replace(/-/g, "/");
      let to = d.replace(/-/g, "/");
      console.log(from, to);
      if(from>to){
        showAlert("Check the dates ! \n Dates could not be in reverse order","danger");
        setLoading(false);
      }else{
      const url = `${BACKEND_LINK}/api/tools/filterBydate__item`;
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          from: from,
          to: to,
        }),
      });
      const startup_ = await response.json();
      console.log(startup_);
      
      setTimeout(() => {
        setLoading(false);
        set_setup_data(startup_);
        let t = 0;
      for (let index = 0; index < startup_.length; index++) {
        const element = startup_[index];
        // console.log(element.total)

        t = t + element.total;
       
      } settotal(t);
        
      }, 1500);}
    };
    
      useEffect(()=>{ 
        Fetch_all_components();
        setup();
          // eslint-disable-next-line
      },[]
      )
    
    return (
       <div className="min-vh-100 m-0 p-0"  style={ Style }>
                <div className="row  main m-0 p-0" style={Style}
           
      >

                     <div  className=" mw-100 p-0 st m-0 p-0" >
            {/* <VerticalNavbar /> */}
        <Horizontalnav/>
          </div> 
        
                    <div className="col-12 min-vh-100 m-0 p-0">
                    <div className="row mw-100 p-0 m-0">
              
                         <div className="col-12  m-0 p-0 ">
                <div className="row mw-100 m-0 p-0">
                <div className="container d-flex justify-content-evenly flex-column mt-1 col-12 p-0 backGroundSetup" >
                <div className=" d-flex justify-content-center align-items-center  col-12 m-0 p-0 " >
                 
 
                 <img
                                   src={require("./images/T-removebg-preview.png")}
                                   alt=""
                                   width="550px"
                                   height="400px"
                                 />
                 
                 </div>
                 
                 </div>


  {   month_key.length <=2 &&  <div className=' container d-flex justify-content-center col-12  m-0 p-0 ' >
                 
                      {/* <img
                      src={require("./T-removebg-preview.png")}
                      alt=""
                      width="450px"
                      height="400px"
                    /> */}
         <h2> We Show Here A Graph When Transaction Limit Match</h2>
                    </div>
                  }


        {  month_key.length >2 && <div className='col-12 p-5   ' style={{ "position": "relative",
  margin: "auto auto 100px auto",
  height: "80vh",
  width: "80vw"}} >    
         <Bar  data = {{
  labels: month_key,
  datasets: [{
    label: 'Vegetable supplied',
    data: month_val,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1,
    
  },
],
}
}    height={100}
// options={{
//   maintainAspectRatio: true,
//   scales: {
//     // yAxes: [
//     //   {
//     //     ticks: {
//     //       // The y-axis value will start from zero
//     //       beginAtZero: true,
//     //     },
//     //   },
//     // ],
//   },
  
  options={
   
    {
      maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }
    }
  }}

 />

  </div>
  }
             

     
               
                <div className='col-12 d-flex justify-content-center mt-3'>
              <div className='col-6 d-flex justify-content-center'>
  <strong className='text-black m-2 p-3'> From </strong>
   <input type="date" name="" id="from" />
   <strong className='text-black m-2 p-3'> To </strong>
   <input type="date" name="" id="to" />  <br />
   <button className='m-3' onClick={fetchbydate}>Fetch Data</button>
   </div>
 </div>  
                </div>
              </div>
      <div  className="col   "
              style={{ minHeight: "500px" }}
            >
              
              <div className="container fluid mt-5">
              <h4 className="mb-2 txt_heading">Days Count : {total===0 ? 0 :setup_data.length }</h4>
              <h4 className="mb-2 txt_heading">Total :{total}</h4>
                
                {Loading && <Loader />}
                {!Loading &&
                  setup_data.map((element) => {
                    return (
                      <div className="container mt-2 details_cards" data-aos="zoom-in-up" style={{
                        // background: "linear-gradient(124deg, rgb(214,168,152) 81%, transparent)",
                        // maxHeight: "500px",
                        // overflow:"hidden"
                       }}>
                        <div className="d-flex justify-content-between">
                           
                          <h4 className="mb-2 txt">Date : {element._id}</h4>
                         
                          <h4 className="mb-2 txt">Total Quantity: {element.total_quantity}</h4>
                           <h5 className="mb-2 txt">Total:Rs. {element.total}</h5>
                        </div>
                        <table className="ml-4" style={{ width: "1100px" }}>
                          <thead style={{ background: "#8fc88c" }}>
                            <tr style={{"background-color": "bisque"}} >
                              <td>Customer</td> 
                              <td>Item</td>
                              <td>Quantity</td>
                              <td>Price</td>
                              <td>Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            {element.item.map((Item) => {
                              return (
                                <tr className="m-1 " style={Style}>
                                {/* <tr className="m-1 " style={{
                                "color": "#e6b3b3"  }}> */}
                                  <td className="m-3">{Item.Customer}</td>
                                  <td className="m-3">{Item.veg}</td>
                                  <td className="m-3">{Item.Quantity}</td>
                                  <td className="m-3">{Item.Price}</td>
                                  <td className="m-3">{Item.Total}</td>
                                  
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                        
                         <button type="button" class="btn btn-secondary" onClick={()=>{Delete_by_date(element._id)}} >Delete</button>
                        
                         </div> 
                      </div>
                    );
                  })}
              </div>
            </div>
                        </div>

                    </div>
                </div>

            </div>
     
      
    )
}

//https://cdn-icons-png.flaticon.com/512/1035/1035688.png
