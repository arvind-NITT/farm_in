import React, { useEffect, useContext, useState, Children } from 'react'
// import faker from 'faker';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from "chart.js";
import {  Line } from "react-chartjs-2";
// import SabjiSates from "../context/SabjiSates";
import { useScrollBy } from "react-use-window-scroll";
import SabjiContext from "../context/Contexts";
import Horizontalnav from "./Horizontalnav";
import Style from "./Styles1.css"
export default function One_veg_detail() {
  ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);
    const context = useContext(SabjiContext);
    const {data_for_one_veg_details, label_for_one_veg_details, setup, Fetch_all_components, name_of_veg } = context;
    const [Loading, setLoading] = useState(false);
    
      useEffect(()=>{ 
        Fetch_all_components();
        setup();
        // eslint-disable-next-line
      },[]
      )
      console.log(label_for_one_veg_details,data_for_one_veg_details)
      // const xValues = data_for_one_veg_details;
    var xValues =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let count=0;
       for( let key in label_for_one_veg_details){
        // var key=  ;
        // console.log(key);
        // console.log("inside");
        let s= label_for_one_veg_details[key].split('/');
        let year = parseInt(s[1]);
        if(year==NaN)
          continue;
        let ind=   parseInt(s[0]);
        if(year==2023)
          ind+=12;
          console.log(ind,year);
        //  let p= s[1] +"/" + s[0];
        xValues[ind-1]= data_for_one_veg_details[count];
        count++;

       }



      // const yValues = [7,8,8,9,9,9,10,11,14,14,15];
      // console.log(data_for_one_veg_details)
      // const labels = [""];
      
      const labels = ['January 2022', 'February 2022', 'March 2022', 'April 2022', 'May 2022', 'June 2022', 'July 2022','August 2022','September 2022','October 2022','November 2022','December 2022','January 2023','Fabeury 2023'];
      // const labels=label_for_one_veg_details;
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset',
            data: xValues,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          // {
          //   label: 'Dataset 2',
          //   data: data_for_one_veg_details,
          //   borderColor: 'rgb(53, 162, 235)',
          //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
          // },
        ],
      };
    return (
       <div className="min-vh-100 m-0 p-0"  style={ Style }>
                <div className="row  main m-0 p-0" style={Style}>
           
                     <div  className=" mw-100 p-0 st m-0 p-0" >
       
        <Horizontalnav/>
          </div> 
                   
                    <div className="col-12 min-vh-100 m-0 p-0">
                    <div className="row mw-100 p-0 m-0">
        
                         <div className="col-12  m-0 p-0 ">
                <div className="row mw-100 m-0 p-0">
                <div className="container d-flex justify-content-evenly flex-column mt-1 col-12 p-0" >
  
         
       <div className='col-12 p-5  ' style={{ "position": "relative",
  margin: "200px auto 100px auto",
  height: "80vh",
  width: "80vw"}} > 
  <h2>   {name_of_veg}  </h2>

    

  <Line options={
       { responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Line Chart',
          },
        },
        aspectRatio: 1446/1000,
      }
  }
  data={data}

  />


  </div>
     

                
                </div>
           
                </div>
              </div>
  
                        </div>

                    </div>
                </div>

            </div>
     
      
    )
}

//https://cdn-icons-png.flaticon.com/512/1035/1035688.png
