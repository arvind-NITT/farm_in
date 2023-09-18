import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import VerifyOtp from "./components/VerifyOtp";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SabjiSates from "./context/SabjiSates";
import Details from "./components/Details";
import Item from "./components/Item";
import Customer from "./components/Customer";
import VegDetails from "./components/VegDetails";
import Pricedetails from "./components/Pricedetails";
import Veges from "./components/Veges";
import Prices from "./components/Prices";
import Quantity from "./components/Quantity";
import Transaction from "./components/Transaction";
import Alert from "./components/Alert"; 
import Style from './components/Styles.css'
import Homepage from "./components/Homepage";
import Verifyotpforforgotpassword from "./components/Verifyotpforforgotpassword";
import Verifyotpsendbyforgotpassword from "./components/Verifyotpsendbyforgotpassword";
import ResetPassword from "./components/ResetPassword";
import One_veg_detail from "./components/One_veg_detail";

function App() { 
  return (
    <SabjiSates>
      {/* <div className="container  m-0 p-0 mw-100" style={{ "background-color": "#010000de"}}> */}
      <div className="container  m-0 p-0 mw-100" style={{ "background-color": "#ffffff"}}>
      {/* <div className="container  m-0 p-0 mw-100" style={{ "background-color": "#100e17"}}> */}
       {/* <div className="min-vh-100 min-vw-100" style={{ background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)",zIndex:1}}> */}
      <BrowserRouter>
      <Alert/>
        <Routes>
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/Verifyotp" element={<VerifyOtp />} />
          <Route exact path="/Verifyotpforforgotpassword" element={<Verifyotpforforgotpassword />} />
          <Route exact path="/Verifyotpsendbyforgotpassword" element={<Verifyotpsendbyforgotpassword />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/One_veg_detail" element={<One_veg_detail />} />
          <Route exact path="/additems" element={<Item/> } />
          <Route exact path="/addcustomer" element={<Customer/> } />
          <Route exact path="/addveg" element={<Veges/> } />
          <Route exact path="/addprice" element={<Prices/> } />
          <Route exact path="/addQuantity" element={<Quantity/> } />
          <Route exact path="/transactions" element={<Transaction/> } />
          <Route exact path="/customerdetails" element={<Details />} />
          <Route exact path="/vegdetails" element={<VegDetails />} />
          <Route exact path="/Pricedetails" element={<Pricedetails />} />
        </Routes>




      </BrowserRouter>
          </div>
    </SabjiSates>
  );
}

export default App;
