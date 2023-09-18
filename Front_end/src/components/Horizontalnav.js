import React, { useContext } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import Style from './Styles.css'
export default function Horizontalnav(){
   const navigate= useNavigate();
    const context = useContext(SabjiContext);
    const { username} = context;
    // console.log(username);
    if(username==""){
      navigate('/')
    }
    const logout=()=>{ 
      localStorage.removeItem('token');
       
  }

    return( <nav class="navbar navbar-expand-lg bg-success bg-body-tertiary st" style={{position: 'sticky' , top :'0px'}} >
  <div class="container-fluid st" style={{position: 'sticky' , top :'0px'}}>
    <a class="navbar-brand" href="#">
       <img src={require("./images/Farm__In-removebg-preview.png")} alt="Logo" width="150" height="80" class="d-inline-block align-text-top"/>
    </a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon ">
        {/* <img src={require("./images/more (1).png")} alt="" srcset="" width={40} height={40} /> */}
        </span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="  navbar-nav txt d-flex justify-content-center ">
        <li class=" nav_links nav-item   ">
        <Link className='nav_links' to='/home'  style={Style}>Dashboard</Link></li>
        
        <li class="nav-item nav_links  ">
        <Link className='nav_links' to='/transactions'style={{"textDecoration":"none"}}>Transactions</Link>
        </li>
        <li class="nav-item nav_links ">
        <Link className='nav_links' to='/additems'style={{"textDecoration":"none"}}>Add Item</Link>
        </li>
      
        <li class="nav-item  nav_links">
         <span className='nav_links mt-0'>   <img src= {require('./images/profile.png')} width={'50px'}/>  {username}  </span>
        </li>

        <li class="nav-item nav_links ">
        <Link className='nav_links' to='/' onClick={logout}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        // </div>
    


    )
  }





