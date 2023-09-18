import React, { useEffect, useContext, useRef, useState } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import Horizontalnav from "./Horizontalnav";
import Style from './Styles.css'
import Alert from './Alert';
export default function Customer() {
  const navigate = useNavigate();
  const [cust_name, set_cust_name] = useState({ name: "" });
  const ref = useRef();
  const closeref = useRef();
  const context = useContext(SabjiContext);
  const { showAlert, setup_customer,customer, detetecustomer,setup, arrangedata, Fetch_all_components, setcustomer, add_customer } = context;
  const logoutfc = () => {
    localStorage.removeItem('token');
    showAlert("LogOut! Please Login to Begin", "success")
    navigate('/', { replace: true })
  }
  useEffect(() => {
  setup();
    Fetch_all_components();
    // arrangedata();
    // eslint-disable-next-line
  }, [])
  const addcust = () => {
    ref.current.click();
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
  // const ondelete=()=>{
  //   console.log(cust_name)
  //   detetecustomer(cust_name._id);

  // }
  return (

    <div>
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
              <div className="container"><input type="text" name='name' onChange={onchange} value={cust_name.name} /></div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
              <button type="button" className="btn btn-primary" onClick={onsubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="  m-0 p-0 min-vw-100" style={{ "background-color": "#ffffff"}}>
      {/* <div className="row mw-100 min-vh-100 m-0 " style={{ "background-color": "#100e17"}}
     
            > */}
          
          <div
            className=" mw-100 p-0 st"
          
          >
            {/* <VerticalNavbar /> */}
        <Horizontalnav/>
          </div> 


            {/* <div className="row row-cols-1   col-7  m-4 "> */}
            <div className="col-12 min-vh-100 m0p0">
              <div className="row mw-100 m0p0">
                <div className="col-12 m0p0  ">
                <div className="row mw-100 m0p0">
                <div className="container d-flex justify-content-evenly flex-row mt-1 col-12 backGroundSetup m0p0" >
                <div className="container d-flex justify-content-evenly flex-row col-0 m-0 p-0 backGroundSetup" style={{ maxWidth: "550px" ,maxHeight:"400px"}}>
                 
       


                </div>
                {/* <div  className="container d-flex justify-content-evenly flex-row col-12 backGroundSetup">
                <img
                    // src={require("./images/cust.avif")}
                    src={require("./images/connect-removebg-preview.png")}
                    alt=""
                    width="550px"
                    height="500px"
                  />
                </div> */}
                  <div style={{width:"550px" , height:"500px"}} >
                {/* <img
                    src={require("./images/veg_png.png")}
                  alt="" */}
                   
                  {/* /> */}
                </div>
                </div>
             
                </div>
              </div>
                <div className="col mt-5">
                  <div className="container d-flex justify-content-center"> <button className="btn btn-primary" onClick={addcust}>Add New Customer</button></div>
                  <div className="d-flex justify-content-center container">
                    <div className="row d-flex flex-row justify-content-evenly">

                      {/* <div className="col-md-4 my-2"> */}
                        {
                          customer.map((element) => {
                            return  <div key={element.name} className="col-md-4 col-sm-8 flex-sm-wrap my-2 txt MY_card  "  data-aos="fade-up" style={Style}>
                            <div className=" h-100" style={Style}>
                              <div className="card-body">
                                <h5 className="card-title txt">{element.name}</h5>
                                   <div className="container d-flex justify-content-center">
                               <button className="btn btn-secondary" name='_id' value={element._id} onClick={() => { return detetecustomer(element._id) }}>Delete</button></div>
                         
                              </div>
                            </div>
                          </div>
                          
                        
                           
                          })
                        }
                      

                      {/* </div> */}
                    </div>
                  </div>

                </div>
              </div>

            </div>
       
          
        </div>
      
    </div>
  )
}
