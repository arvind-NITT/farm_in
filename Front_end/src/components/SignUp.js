import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import { Link,Outlet } from 'react-router-dom';
let BACKEND_LINK=process.env.BACKEND_LINK;
export default function SignUp() {
    const context= useContext(SabjiContext);
    const { showAlert}=context;
    const [user,setUser]=useState(null)
    const Onchange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
     console.log(user)
    }
    const navigate = useNavigate()
    const onclickhandle= async (e)=>{

       const Url_to_Signup = `${BACKEND_LINK}/api/auth/signup`
      const response = await fetch(Url_to_Signup, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify( {name:user.name,email:user.email,password:user.password} ),
      })
      console.log(user);
      const token = await response.json();
      // console.log(ret_data);
    // console.log(token.errors[0].msg)
      if(token.success===true)
      {
        localStorage.setItem('token',token.authtoken);
        console.log(token.authtoken)
        navigate('/',{replace:true});
         showAlert("Account created Successfully Please Login Once ","success")
      }else{
          showAlert(token.message,"danger") 
        }
    }
    return (
      <div className='container min-vw-100 min-vh-100 d-flex justify-content-center align-items-center log' >
      <div className="container  logincards">
         <form>
       <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Your Name</label>
    <input type="name" className="form-control" onChange={Onchange} id="name" name='name' placeholder="name...." minLength={5} />
  </div>
       <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control" onChange={Onchange} id="email" name='email' placeholder="name@example.com"/>
  </div>
       
       
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Password</label>
    <input type="password" className="form-control" onChange={Onchange} id="password" name='password' placeholder="Password.." minLength={5}/>
  </div>
  <button type="button" className="btn btn-primary" onClick={onclickhandle}>SignUp</button>
 
  </form>
  <div className="container m-2 pl-3 nav_links">
 <Link className='text-white' to='/' >Already a User, Login Here</Link></div>
  </div> 
  <Outlet/>
      </div>
    )
}
