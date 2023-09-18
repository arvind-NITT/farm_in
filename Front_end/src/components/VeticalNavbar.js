import React from 'react'
import { Link } from 'react-router-dom'
export default function VeticalNavbar() {
 const styles= {
            "width":"300px",
            "height":"30px" 
    }
    const logout=()=>{
        localStorage.removeItem('token');
         
    }
  return (
    <div>
      <div className="container navbar_css ">
        <ul>
            <div className='navbar_css' style={styles} >
                <li><Link to="/home">  home</Link> </li>
            </div>
            <div className=' navbar_css' style={styles} >
                <li><Link to="/Pricedetails">  Pricedetails</Link> </li>
            </div>
            <div className=' navbar_css' style={styles} >
                <li><Link to="/VegDetails">  vegdetails</Link> </li>
            </div>
            <div className=' navbar_css' style={styles} >
                <li><Link to="/CustomerDetails">  customerdetails</Link> </li>
            </div>
            <div className=' navbar_css' style={styles} >
                <li><Link to="/" onClick={logout}>  Logout</Link> </li>
            </div>
        </ul>
      </div>
    </div>

  )
}
