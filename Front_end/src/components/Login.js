import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SabjiContext from '../context/Contexts';
import { Link,Outlet } from 'react-router-dom';
import Style from './Styles1.css'
let BACKEND_LINK=process.env.BACKEND_LINK;
export default function Login() {
  const context= useContext(SabjiContext);  
  const { showAlert,username,setusername}=context;
  const [user,setUser]=useState(null)
  const Onchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   console.log(user)
   
  }
  const navigate = useNavigate()
  const onclickhandle2= async (e)=>{
  //   const Url_to_Signup = '${BACKEND_LINK}/api/auth/signup'
  //   const response = await fetch(Url_to_Signup, {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     body: JSON.stringify( {name:user.name,email:user.email,password:user.password} ),
  //   })
  //   console.log(user);
  //   const token = await response.json();
  //   // console.log(ret_data);
  // // console.log(token.errors[0].msg)
  //   if(token.success===true) 
  //   {
  //     // localStorage.setItem('token',token.authtoken);
  //     // console.log(token.authtoken)
      navigate('/Verifyotpforforgotpassword',{replace:true});
  //      showAlert("Check your mail ","success")
  //   }else{
  //       showAlert(token.message,"danger") 
  //     }
  }
  const onclickhandle1= async (e)=>{
    const Url_to_Signup = `${BACKEND_LINK}/api/auth/signup`;
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
      // localStorage.setItem('token',token.authtoken);
      // console.log(token.authtoken)
      navigate('/Verifyotp',{replace:true});
       showAlert("Check your mail ","success")
    }else{
        showAlert(token.message,"danger") 
      }
  }
  const onclickhandle= async (e)=>{
    console.log("Le tera user dekh le",user.password);

     console.log(user.password);
         if(user.password==undefined || user.email ==undefined){
          showAlert("Kya kr rha he bhai ye ","danger");
         }
    const Url_to_login = `${BACKEND_LINK}/api/auth/login`
    const response = await fetch(Url_to_login, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify( {email:user.email,password:user.password} ),
    })
    const token = await response.json(); 
    // console.log(ret_data); 

  console.log(token) 
    if(token.success===true)
    {
      localStorage.setItem('token',token.authtoken);

      setusername(user.email) 
      navigate('/home',{replace:true}); 
      showAlert("Login SuccessFully","success");
    }else{
        showAlert(token.message,"danger")
      }
  }
  return (
      
    <div className="main1" style={Style}>  
		
		<input type="checkbox" id="chk" aria-hidden="true"/>
              
		
			<div className="login" style={Style}>
				{/* <form action="#" method="post"> */}
					<label for="chk" aria-hidden="true" style={Style}>Login</label>

					<input type="email" name="email" placeholder="Email" onChange={Onchange} id="email" required="" style={Style}/>
					<input type="password" onChange={Onchange} id="password" name='password' placeholder="Password" required="" style={Style}/>
					<button onClick={onclickhandle} style={Style}>Login</button>
					<button onClick={onclickhandle2} style={Style}>Forgot password</button>
				{/* </form> */}
				
				
			</div>
			<div className="signup" style={Style}>
				{/* <form action="/signup" method="post"> */}
					<label for="chk" aria-hidden="true" style={Style}>Sign up
					</label>
					<input type="text" name="name" placeholder="User name" onChange={Onchange} id="uname" required="" style={Style}/>
					<input type="email" name="email" onChange={Onchange} id="email" placeholder="Email" required="" style={Style}/>
					<input type="password"onChange={Onchange} id="password" name='password' placeholder="Password" required="" style={Style}/>
					<button type="submit" onClick={onclickhandle1} style={Style}>Sign up</button>
					<button type="submit"  style={Style}>
						<a href="/verifyOtp">Verify Otp</a>
					 </button>
				{/* </form> */}
			</div>
      </div>
      

  )
}

{/* 
//     <div className="container min-vw-100 min-vh-100 p-3 d-flex justify-content-center align-items-center log" style={{ "background-color": "#100e17"}}>
//     <div className="container  logincards"> 
//     <form >
//      <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
//   <input type="email" className="form-control" onChange={Onchange} id="email" name='email' placeholder="name@example.com"/>
// </div>
      
      
// <div className="mb-3">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Password</label>
//   <input type="password" className="form-control" onChange={Onchange} id="password" name='password' placeholder="Enter Your Password"/>
// </div>
// <div className="mb-3 ">

// <button type="button" className="btn btn-primary " onClick={onclickhandle}>Login</button>
// </div>
// </form>
// <div className="container m-2 nav_links align-self-end">
//  <Link className='text-white ' to='/Signup' >  SignUp here</Link></div>
// </div> 
// <Outlet/>
//      </div>  */}