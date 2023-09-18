import React, { useEffect,useRef, useContext, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, RadialLinearScale, PointElement, elements } from "chart.js";
import { Bar, Doughnut ,Pie,PolarArea,Line} from "react-chartjs-2";
import SabjiContext from "../context/Contexts";

// import Veges from './Veges';
import HorizontalNavbar from "./Horizontalnav";
import Style from './Styles.css'
import Style1 from './Styles1.css'
// import { LineElement } from "chart.js/dist";
export default function Home() {
  const [cust_name, set_cust_name] = useState({ name: "" });
  const ref = useRef();
  const ref1 = useRef();
  const closeref = useRef();
  const closeref1 = useRef();
  const navigate = useNavigate();
  const context = useContext(SabjiContext);
  const {
  
    set_data_for_one_veg_details,
    set_label_for_one_veg_details,
    add_customer,
    total_Quantity,
    showAlert,
    veges,deteteveges,
    add_veges,
    Fetch_all_components,
    setup,
    setup_veges,
    setup_customer,
    total,
    detetecustomer,
    name_of_veg,
    set_name_of_veg,
  } = context;

  let total_money = 0;
  
   
  ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement,RadialLinearScale,PointElement);
  
   const take_me_to_One_veg_detail=( (items,name) =>{
    set_name_of_veg(name);
    var map1 = {};
           function addValueToList1(key, value) {


      map1[key] = map1[key] || 0;
      map1[key]+=value;
     }

        items.map((elements)=>{
          var key=  elements.date.slice(0,7);
          let s= key.split('/');
          if(s[1]==undefined)
            s[1]="nahi mila";
           let p= s[1] +"/" + s[0];
                    addValueToList1(p,elements.Total);
         })
       
var month_key1=[];
var month_val1=[];
   for( let [key,val] of Object.entries(map1)){
    console.log(key,val)
    
     month_key1.push(key);
     month_val1.push(val);
   }
         set_data_for_one_veg_details(month_val1);
         set_label_for_one_veg_details(month_key1);

         navigate('/One_veg_detail',{replace:true});
   })
  

  useEffect(() => {
    try {
      Fetch_all_components();
      setup();
    } catch (error) {
      navigate('/',{replace:true});
    }
  
    // eslint-disable-next-line
  }, []);
  const addcust = () => {
    ref.current.click();
  }
  const addveg = () => {
    ref1.current.click();
  }
  const onchange = (e) => {
    set_cust_name({ ...cust_name, [e.target.name]: e.target.value })
    console.log(cust_name);
  }
  const onsubmit = async () => {
     let date= new Date();
     let year = date.getFullYear();
     let month= date.getMonth()+1;
     let day= date.getUTCDate();
     if(month<10)
     month='0'+month;
     let realdate= year+"/"+month+"/"+day;
     console.log(day,month,year,realdate)
     var name=cust_name.name;
     var spl= name.split(" ");
     console.log(spl);
     var Capname="";
     for(let i=0;i<spl.length;i++){
       var sli= spl[i].slice(1);
       sli = sli.toLowerCase();
       var Cap_name= spl[i][0].toUpperCase() + sli;
       if(i>0)
       Capname= Capname + " "+ Cap_name;
       else
       Capname+=Cap_name;
     }
      cust_name.name=Capname;
     add_customer(cust_name.name,realdate);
     closeref.current.click();
  }
  const onsubmitVeg=async()=>{
    
    let date= new Date();
    let year = date.getFullYear();
    let month= date.getMonth()+1;
    let day= date.getUTCDate();
    if(month<10)
    month='0'+month;
    let realdate= year+"/"+month+"/"+day;
    console.log(day,month,year,realdate)
    add_veges(cust_name.name,realdate);
    closeref1.current.click();
  }
  return (
    <div >
      <button type="button" ref={ref1} className="btn btn-primary  d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
      </button>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add vegetable</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
            <div className="container"><input type="text" name='name'  placeholder="Type Here" onChange={onchange} value={cust_name.name} /></div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref1}>Close</button>
              <button type="button" className="btn btn-primary" onClick={onsubmitVeg}>Save</button>
            </div>
          </div>
        </div>
      </div>
       <button type="button" ref={ref} className="btn btn-primary  d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Customer</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              <div className="container"><input type="text" name='name' placeholder="Type Here" onChange={onchange} value={cust_name.name} /></div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
              <button type="button" className="btn btn-primary" onClick={onsubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" min-vh-100 m0p0 text-color-white  "
        style={Style}
      >
         <div className=" row mw-100 min-vh-100 m-0 m0p0">
          <div
            className=" mw-100 p-0 st"
            // style={{
            //   background:
            //     "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",
            // }}
          >
            {/* <VerticalNavbar /> */}
        <HorizontalNavbar/>
          </div> 
        {/* <div className="row min-vh-100 ">
          <div
            className="col-sm-3  "
            // style={{
            //   background:
            //     "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",
            // }}
          >
            <VerticalNavbar />
          </div>  */}
         
          {/* <div className="row row-cols-1   col-7  m-4 "> */}
          <div className="col-12 min-vh-100 m0p0">
            <div className="row mw-100 m0p0  ">
            {/* <div className="row mw-100 ml-0 mr-0 backGroundSetupfordashboard "> */}
              <div className="col-12   m0p0">
                <div className="row mw-100 m-0 p-0  ">
                
                <div className="container d-flex justify-content-center mt-1 col-6  " style={{ maxWidth: "550px" ,maxHeight:"400px"}}>
                  <img
                    src={require("./images/dashboard-removebg-preview.png")}
                    alt=""
                    width="350px"
                    height="300px"
                  />
                 
           
                </div>
                <div className="container d-flex flex-row col-6 justify-content-evenly flex-wrap  p-3">
                  <div className="dashboard_cards1 dashboard_cards" style={Style}>
                    <div className="d-flex flex-row justify-content-evenly p-3 ">
                      <div >GrandTotal <br />{total} </div>
                   <div><img src={require("./images/Untitled design.png") }
                   style={{backgroundColor:"white",padding:'2px',margin:'5px'}}alt="" srcset=""  /></div>
                  
                  </div>
                  </div>
                  <div className="dashboard_cards2 dashboard_cards">
                    <div className="d-flex flex-row justify-content-evenly p-3 ">
                      <div > Customer  <br />{setup_customer.length} </div>
                   <div><img src={require("./images/icons8-customer-100.png") } style={{backgroundColor:"white",padding:'2px',marginLeft:'25px',
                  marginTop:'5px'}} alt="" srcset=""  /></div>
                  
                  </div>
                  </div>
                  <div className="dashboard_cards3 dashboard_cards">
                    <div className="d-flex flex-row justify-content-evenly p-3 ">
                      <div > Veges  <br />{setup_veges.length} </div>
                   <div><img src={require("./images/fruits-vegetables-healthy-food_24877-51754.avif") }
                   style={{backgroundColor:"white",padding:'2px',marginLeft:'69px',
                   marginTop:'5px'}}alt="" srcset=""  /></div>
                  
                  </div>
                  </div>
                  <div className="dashboard_cards4 dashboard_cards">
                    <div className="d-flex flex-row justify-content-evenly p-3 ">
                      <div >Quantity <br />{total_Quantity} </div>
                   <div><img src={require("./images/calculator-concept-illustration_114360-1239.avif") }
                   style={{backgroundColor:"white",padding:'2px',marginLeft:'29px',
                   marginTop:'5px'}}alt="" srcset=""  /></div>
                  
                  </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="d-flex justify-content-center   flex-wrap m0p0">
                <div className="row mw-100 m-0 p-0 d-flex justify-content-center" style={{backgroundColor:" #e5f3ff"}}>

                    <h2 className="xm-text f72 f-bold name txt_heading m-3" >Customer  </h2>
                    <hr className="hline" />
                    {setup_customer.length === 0 && (
                      <h3 className="xm-text f72 f-bold name text-black">
                        {" "}
                       First Go Add Your Customer 
                       <br />
                        
                      </h3>          
                    )}  
                    {setup_customer.map((element) => {
                      return (  
                        <div key={element._id} data-aos="fade-left" className="col-md-4 col-sm-8 flex-sm-wrap my-2 MY_card_for_customer " style={Style}>
                          <div className="" style={{height:"70%"}}>
                            <div className="card-body">
                              <h5 className="card-title txt">{element._id}</h5>
                              <h6 className="card-subtitle subtitle mb-2 text-muted txt">
                              <strong >{element.total}</strong> 
                              </h6>
                            </div>
                          </div>
                            <img className="class_for_hower" src={require('./images/delete.png')} alt="delete Icon" srcset="" width={"13%"}  onClick={() => { return detetecustomer(element._id) }}/>
                        </div>
          
                      );
                    })
                    }
               
                           
                  <div  data-aos="fade-left" onClick={addcust} className="col-md-4 col-sm-8 flex-sm-wrap my-2 MY_card_for_add_ " style={Style}>
                          <div className=" h-100" style={Style}>
                            <div className="card-body">
                                 
                            </div>
                          </div>
                </div>
                       

                    <h2 className="xm-text f72 f-bold name txt_heading m-3" > Vegetables</h2>
                    {setup_veges.length === 0 && (
                      <h3>
                        {" "}
                        First Go Add Your Veges  <br />
                        {/* <div data-aos="fade-right" className="col-md-4 col-sm-8 flex-sm-wrap my-2 MY_card_for_veg onhowertomycard">
                          <div className="h-100" style={Style}>
                            <div className="card-body">
                              <h5 className="card-title txt onhowertomycard" style={Style}  >Dummy Data</h5>
                              <h6 className="card-subtitle subtitle  text-muted txt ">
                                {" "}
                               100000
                              </h6>
                            </div>
                          </div>
                        </div> */}
                      </h3>
                    )}
                        <hr className="hline" />
                    {setup_veges.map((element) => {
                      return (
                        <div key={element._id} data-aos="fade-right" className="col-md-4 col-sm-8 flex-sm-wrap my-2 MY_card_for_veg ">
                           <div className="" style={{height:"60%"}}>
                            <div className="card-body onhowertomycard">
                              <h5 className="card-title txt onhowertomycard" style={Style}  onClick={()=>take_me_to_One_veg_detail(element.item,element._id)}>{element._id}</h5>
                              <h6 className="card-subtitle subtitle  text-muted txt ">
                                {" "}
                                {element.total}
                              </h6>
                            </div>
                          </div>
                          <img className="class_for_hower" src={require('./images/delete.png')} alt="delete Icon" srcset="" width={"10%"} style={{marginLeft:"90%"}}  onClick={() => { return deteteveges(element._id) }}/>
                        </div>
                      );
                    })}
                      <div  data-aos="fade-left" onClick={addveg} className="col-md-4 col-sm-8 flex-sm-wrap my-2 MY_card_for_veg_add class_for_hower" style={Style}>
                          <div className=" h-100" style={Style}>
                            <div className="card-body">
                                 
                            </div> 
                          </div> 
                </div>
            {/* <div className="container d-flex justify-content-center"> <button className="btn btn-primary" onClick={addveg}>Add New Vegetable</button></div>   */}
              { setup_veges.length >0 &&      <div className="d-flex justify-content-evenly flex-sm-wrap ">
                    
                      <button type="button" className="btn btn-dark m-2">
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/vegdetails"
                        >
                          for Veg Detail Click here
                        </Link>
                      </button>
                   
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 

       */}
    </div>
  );
}




// import React, { useEffect, useContext, useState } from "react";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import SabjiContext from "../context/Contexts";
// // import Veges from './Veges';
// import VerticalNavbar from "./VerticalNavbar";
// export default function Home() {
//   const navigate = useNavigate();
//   const context = useContext(SabjiContext);
//   const {
//     showAlert,
//     Fetch_all_components,
//     setup,
//     setup_veges,
//     setup_customer,
//   } = context;
//   const [Loading, setLoading] = useState(false);

//   const [usrdata, setuseradata] = useState([]);
//   let total_money = 0;
//   //  console.log(item)
//   // const detailsprovided=async()=>{
//   // //   await console.log(customer)
//   // //   for (let index = 0; index < customer.length; index++) {
//   // //        const ele = customer[index];
//   // //        let arvind=0;
//   // //         console.log(ele)
//   // //         for (let i = 0; i < item.length; i++) {
//   // //          const element = item[i];
//   // //            if(element.CustomerName===ele.name)
//   // //            {
//   // //              arvind+=element.price * element.Quantity
//   // //              console.log(arvind)
//   // //            }
//   // //         }

//   // //         let data={
//   // //           "name":ele.name,
//   // //           "total_purchase":arvind
//   // //         }
//   // //        //  if(user.length===0)
//   // //      await setuseradata(usrdata.push(data));
//   // //      //  else
//   // //      //  set_user(user.concat(data));
//   // //       }
//   // //   for (let index = 0; index < veges.length; index++) {
//   // //        const ele = veges[index];
//   // //        let arvind=0;
//   // //         console.log(ele)
//   // //         for (let i = 0; i < item.length; i++) {
//   // //          const element = item[i];
//   // //            if(element.ItemName===ele.Vegname)
//   // //            {
//   // //              arvind+=element.price * element.Quantity

//   // //              console.log(arvind)
//   // //            }
//   // //         }
//   // //         total_money+=arvind;
//   // //         let data={
//   // //           "Veg":ele.Vegname,
//   // //           "total_Supplied":arvind
//   // //         }
//   // //        //  if(user.length===0)
//   // //      await setuseradata(usrdata.push(data));
//   // //      //  else
//   // //      //  set_user(user.concat(data));
//   // //       }

//   // //         let data={
//   // //           "total_money":total_money
//   // //         }
//   // //         await setuseradata(usrdata.push(data));
//   // // //  console.log("in arrange data");
//   // // //  console.log("User is "+ user)
//   // //   set_user(usrdata)
//   // // // arrangedata();
//   // // console.log(usrdata)
//   //   navigate('/customerdetails')
//   // }

//   useEffect(() => {
//     Fetch_all_components();
//     setup();
//     // eslint-disable-next-line
//   }, []);
//   return (
//     <div>
//       <div
//         className="container min-vh-100 min-vw-100"
//         style={{
//           background:
//             "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",
//         }}
//       >
//         <div className="row  min-vh-100">
//           <div
//             className="col-sm-3 "
//             style={{
//               background:
//                 "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",
//             }}
//           >
//             <VerticalNavbar />
//           </div>
//           {/* <div className="row row-cols-1   col-7  m-4 "> */}
//           <div className="col-9  ">
//             <div className="row  ">
//               <div className="col-12  ">
//                 <div className="container d-flex justify-content-center mt-4">
//                   <img
//                     src={require("./1035688.png")}
//                     alt=""
//                     width="27%"
//                     height="27%"
//                   />
//                 </div>
//               </div>
//               <div className="col mt-5">
//                 <div className="d-flex container flex-wrap">
//                   <div className="row">
//                     <h2>Customer</h2>
//                     {setup_customer.length === 0 && (
//                       <h3>
//                         {" "}
//                         No Customer to show <br />
//                       </h3>
//                     )}
//                     {setup_customer.map((element) => {
//                       return (
//                         <div key={element._id} className="col-md-4 col-sm-8 flex-sm-wrap my-2 ">
//                           <div className="card box-shadow p-3 mb-5  rounded" style={{ width: "18rem" }}>
//                             <div className="card-body">
//                               <h5 className="card-title">{element._id}</h5>
//                               <h6 className="card-subtitle mb-2 text-muted">
//                                 total Vegetable Supplied {element.total}
//                               </h6>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                     <h2> Vegetables</h2>
//                     {setup_veges.length === 0 && (
//                       <h3>
//                         {" "}
//                         No veges to show <br />
//                       </h3>
//                     )}
//                     {setup_veges.map((element) => {
//                       return (
//                         <div key={element._id} className="col-md-4 col-sm-8 flex-sm-wrap my-2">
//                           <div className="card" style={{ width: "18rem" }}>
//                             <div className="card-body">
//                               <h5 className="card-title">{element._id}</h5>
//                               <h6 className="card-subtitle mb-2 text-muted">
//                                 {" "}
//                                 total Vegetable Supplied {element.total}
//                               </h6>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}

//                     <div className="d-flex justify-content-evenly flex-sm-wrap">
//                       <button type="button" className="btn btn-dark m-2 ">
//                         <Link
//                           style={{ textDecoration: "none", color: "white" }}
//                           to="/customerdetails"
//                         >
//                           for Customer Detail Click here
//                         </Link>
//                       </button>
//                       <button type="button" className="btn btn-dark m-2">
//                         <Link
//                           style={{ textDecoration: "none", color: "white" }}
//                           to="/vegdetails"
//                         >
//                           for Veg Detail Click here
//                         </Link>
//                       </button>
//                       <button type="button" className="btn btn-dark m-2">
//                         <Link
//                           style={{ textDecoration: "none", color: "white" }}
//                           to="/Pricedetails"
//                         >
//                           for Price Detail Click here
//                         </Link>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 

//        */}
//     </div>
//   );
// }            
   {/* { Charttype1 &&    < Doughnut  data = {{  labels: bardata_labels,
  datasets: [{
    label: 'Vegetable supplied',
    data: bardata,
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
options={{
  maintainAspectRatio: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       // The y-axis value will start from zero
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },}} />}
 
              { Charttype2 &&    < Bar  data = {{  labels: bardata_labels,
  datasets: [{
    label: 'Vegetable supplied',
    data: bardata,
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
options={{
  maintainAspectRatio: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       // The y-axis value will start from zero
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },}} />}
              { Charttype3 &&    < Pie  data = {{  labels: bardata_labels,
  datasets: [{
    label: 'Vegetable supplied',
    data: bardata,
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
options={{
  maintainAspectRatio: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       // The y-axis value will start from zero
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },}} />}
              { Charttype4 &&    < PolarArea  data = {{  labels: bardata_labels,
  datasets: [{
    label: 'Vegetable supplied',
    data: bardata,
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
options={{
  maintainAspectRatio: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       // The y-axis value will start from zero
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },}} />} 
                { Charttype5 &&    < Line  data = {{  labels: bardata_labels,
  datasets: [{
    label: 'Vegetable supplied',
    data: bardata,
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
options={{
  maintainAspectRatio: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       // The y-axis value will start from zero
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
  legend: {
    labels: {
      fontSize: 25,
    },
  },}} />} */}
                {/* <div>
                    <h5 style={{color:"white"}} >change graph</h5>
                  <select onClick={setCharttype_chart} name="Chart2" id="chartselect" style={{backgroundColor:"#39383d",color:"white"}}>
                    <option value="Doughnut">Doughnut Chart</option>
                    <option value="Bar">Bar Char</option>
                    <option value="Pie">Pie Chart</option>
                    <option value="PolarArea">Polar Area Chart</option>
                  
                  </select>
                  </div> */}