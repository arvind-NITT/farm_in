import React,{useEffect,useContext} from "react";
// import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
// import SabjiSates from "../context/SabjiSates";
import SabjiContext from "../context/Contexts";
import VerticalNavbar from "./VerticalNavbar";
import VeticalNavbar from "./VeticalNavbar";
import Horizontalnav from "./Horizontalnav";
import Style from "./Styles.css"
export default function VegDetails() {
  
  ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
const context= useContext(SabjiContext);
const {setup_veges,setup,vegtotaltotal,bar_veg_tot,bar_veg}= context

  useEffect(()=>{
    setup();
    // eslint-disable-next-line
  },[])
  return (
    <div className="min-vh-100"  style={ Style }
    // style={{  background:
    //         "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}
            >
                <div className="row  main m-0 p-0" style={Style}

            >
        <div
            className=" mw-100 p-0 st"
          
          >
            {/* <VerticalNavbar /> */}
        <Horizontalnav/>
          </div> 

        <div className="col-12 min-vh-100">
          <div className="row mw-100 ml-0 mr-0">
          <div className="col-12   ">
                <div className="row mw-100">
                <div className="container d-flex justify-content-evenly flex-row mt-1 col-12 " >
                <div className="container d-flex justify-content-evenly flex-row col-6 m-0 p-0 " style={{ maxWidth: "550px" ,maxHeight:"400px"}}>
                 
                  <Doughnut  data = {{
  labels: bar_veg,
  datasets: [{
    label: 'Vegetable supplied',
    data: bar_veg_tot,
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
}    height={400}
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
  
  options={{
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
                {/* <div>
                <img
                    src={require("./images/veg_png.png")}
                    alt=""
                    width="550px"
                    height="500px"
                  />
                </div> */}
                </div>
           
                </div>
              </div>


            <div className="col ">
             
              <div className="container">
             { setup_veges.map((element)=>{
                  return <div className="container mt-2 details_cards" style={{
                    // background: "linear-gradient(124deg, rgb(214,168,152) 81%, transparent)",
                    // maxHeight: "500px",
                    // overflow:"hidden"
                   }}>
                 <div className="d-flex justify-content-between txt ">  <h4 className="mb-2"> Item Name :{element._id}</h4>
                 <h4 className="mb-2 txt">Total Quantity: {element.total_quantity}</h4> <h5> Total :{element.total}</h5> </div>
                  <table className="ml-4 " style={{"width":'1100px'}}>
                    <thead 
                    style={{"text-align": "center",
   }}
  >
                      <tr>
                      <td>Date</td>
                      <td>Customer</td>
                      <td>Quantity</td>
                      <td>Price</td>
                      <td>Total</td>  
                      </tr>
                      
                    </thead>
                    <tbody>
                      {
                        element.item.map((Item)=>{
                          return <tr className="m-1 " style={{"text-align": "center",
                          }}>
                          <td className="m-3">{Item.date}</td>
                          <td className="m-3">{Item.Customer}</td>
                          <td className="m-3">{Item.Quantity}</td>
                          <td className="m-3">{Item.Price}</td>
                          <td className="m-3">{Item.Total}</td>
                        </tr>
                        })
                      }
                     {
                      element.item.length > 20 &&  <div>
                        <link rel="stylesheet" to="/vegdetails" /> view more info 
                      </div> 
                     }
                    </tbody>
                  </table>
                 </div>
                  
                })
              }
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
