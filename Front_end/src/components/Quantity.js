import React, { useEffect, useContext,useRef,useState } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import VerticalNavbar from './VerticalNavbar';
import Alert from './Alert';

export default function Quantity() {
  
  const navigate = useNavigate();
  const [cust_name,set_cust_name]= useState({name:""});
  const ref= useRef();
  const closeref= useRef();
  const context = useContext(SabjiContext);
  const { showAlert, qaunti,detetequanta,arrangedata, Fetch_all_components,setquanti ,add_Quanta} = context;
  const logoutfc = () => {
    localStorage.removeItem('token');
    showAlert("LogOut! Please Login to Begin", "success")
    navigate('/', { replace: true })
  }
  useEffect(() => {

    Fetch_all_components();
    // arrangedata();
    // eslint-disable-next-line
  }, [])
  const addcust=()=>{  
    ref.current.click();   
  }
  const onchange=(e)=>{
    set_cust_name({...cust_name,[e.target.name]:e.target.value})
    console.log(cust_name);
  }
  const onsubmit=async()=>{
    let date= new Date();
    let year = date.getFullYear();
    let month= date.getMonth()+1;
    let day= date.getUTCDate();
    if(month<10)
    month='0'+month;
    let realdate= year+"/"+month+"/"+day;
    console.log(day,month,year,realdate)
    add_Quanta(cust_name.name,realdate);
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
              <h5 className="modal-title" id="exampleModalLabel">Add Quantity</h5>
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
      <div>
        <div className="container min-vh-100 min-vw-100" style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
          <div className="row   min-vh-100">
            <div className="col-3 " style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
            <VerticalNavbar/>
            </div>


            {/* <div className="row row-cols-1   col-7  m-4 "> */}
            <div className="col-9  ">
              <div className="row  ">
                <div className="col-12 ">
                  <div className="container d-flex justify-content-center mt-4">
                    <img src={require('./images/quantity.png')} alt="" /></div>
                </div>
                <div className="col mt-5">
               <div className="container d-flex justify-content-center"> <button className="btn btn-primary" onClick={addcust}>Add New Quantity</button></div>  
                  <div className="d-flex justify-content-center container">
                    <div className="row">

                      <div className="col-md-4 my-2"><div className="card" style={{ "width": "18rem" }} >
                        {
                          qaunti.map((element) => {
                            return <div key={element.name} className="card-body m-2 border border-success" style={{     background:
                              "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"
                            }}>
                              <h5 className="card-title text-center">{element.name}</h5>
                              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                          <div className="container d-flex justify-content-center"> 
                      <button className="btn btn-secondary" name='_id' value={element._id} onClick={()=>{return detetequanta(element._id)}}>Delete</button></div>  
                            </div>
                          })
                        }
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
        </div>
      </div>
    </div>
  )
}
