import React, { useContext } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import Style from './Styles.css'
export default function VerticalNavbar() {
    const navigate = useNavigate();
    const context = useContext(SabjiContext);
    const { showAlert} = context;
    const logoutfc = () => {
        localStorage.removeItem('token');
        showAlert("LogOut! Please Login to Begin", "success")
        navigate('/', { replace: true })
      }
      const alltransaction=async()=>{
              
      }
    const mystyle={ "textDecoration":"none" ,"height": "3rem","width":"20rem" ,"listStyle": "none",   background: "linear-gradient(124deg, rgb(214,168,152) 81%, transparent)"
    }
    const mystyle2={ "textDecoration":"none" ,"height": "50px","width":"300px" ,"listStyle": "none",   background: "linear-gradient(124deg, rgb(214,168,152) 81%, transparent)",
    
    }
  return (
    <div className=' position-fixed mt-3 d-flex flex-column flex-wrap flex-sm-wrap navbar navbar-expand-lg'>
      <div className="  d-flex justify-content-center text-center flex-wrap">
        <img src={require('./images/2202112.png')} alt="" width='100px' height='100px'/>
      </div>
       <div className=" d-flex justify-content-center text-center flex-wrap txt"> <h3 className='txt'>Welcome</h3> </div>     
       <ul className="d-flex flex-column     justify-conten- space-evenly; "
    >

<div className='   text-center m-3 ' style={ Style}>
  <li className=' text-uppercase fs-3 fw-bold nav_links'><Link className='nav_links' to='/home'  style={Style}>Dashboard</Link></li>
</div>

<div className='   text-center m-3' style={ Style}>
  <li className='nav-item text-uppercase fs-3 fw-bold nav_links' ><Link className='nav_links' to='/transactions'style={{"textDecoration":"none"}}>Transactions</Link></li>
</div>
   


<div className='   text-center m-3' style={ Style}>
  <li className='nav-item text-uppercase fs-3 fw-bold nav_links' ><Link className='nav_links' to='/additems'style={{"textDecoration":"none"}}>Add Item</Link></li>
</div>
<div className='   text-center m-3' style={ Style}>
  <li className='nav-item text-uppercase fs-3 fw-bold nav_links'><Link className='nav_links' to='/addcustomer'style={{"textDecoration":"none"}}>Customer</Link></li>
</div>
<div className='   text-center m-3' style={ Style}>
  <li className='nav-item text-uppercase fs-3 fw-bold nav_links'><Link className='nav_links' to='/addveg'style={{"textDecoration":"none"}}>Vegetables</Link></li>
</div>
{/* <div className='   text-center m-3' style={ mystyle}>
  <li className='nav-item text-uppercase fs-3 fw-bold'><Link to='/addprice'style={{"textDecoration":"none"}}>Prices</Link></li>
</div> */}
{/* <div className='   text-center m-3' style={ mystyle}>
  <li onClick={alltransaction} className='nav-item text-uppercase fs-3 fw-bold'><Link to='/addQuantity'style={{"textDecoration":"none"}}>Quantities</Link></li>
</div> */}
<div className="container">
  <button className="btn btn-primary text-black " style={{backgroundColor: "#e6b3b3 "}} onClick={logoutfc}>Logout</button>
</div>
<Outlet />
</ul>
    </div>
  )
}
