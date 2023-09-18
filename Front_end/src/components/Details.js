import React, {  useEffect, useContext } from "react";
// import SabjiSates from "../context/SabjiSates";
import SabjiContext from "../context/Contexts";
import VerticalNavbar from "./VerticalNavbar";
import VeticalNavbar from "./VeticalNavbar";
export default function Details() {
  const context = useContext(SabjiContext);
  const { setup_customer, setup } = context;

  useEffect(() => {
    setup();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container min-vw-100 min-vh-100" style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
      <div className="row min-vw-100 min-vh-100" style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
        <div className="col-3 " style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
        <VerticalNavbar/>
        </div>

        <div className="col-9 "  style={{  background:
            "linear-gradient(110deg, rgb(177, 73, 65) 60%, rgb(183, 96, 42) 60%)"}}>
          <div className="row">
            <div className="col-12  d-flex justify-content-center m-4">
              <img
                src={require("./images/4497146.png")} width="350px"
                alt=""
              />{" "}
            </div>
            <div className="col ">
              <div className="container"> 
                {setup_customer.map((element) => {
                  return (
                    <div
                      className="container  mt-2"
                      // style={{
                      //   background: "linear-gradient(124deg, rgb(214,168,152) 81%, transparent)"
                      //  }}
                      style={{ "background-color": "#100e17"}}
                    >
                      <div className="d-flex justify-content-between">
                        {" "}
                        <h4 className="mb-2">Customer Name : {element._id}</h4>{" "}
                        <h4 className="mb-2">Total Quantity: {element.total_quantity}</h4>
                        <h5>Total = {element.total}</h5>{" "}
                      </div>
                      <table className="ml-4" style={{ width: "900px" }}>
                        <thead style={{ background: "#8fc88c" }}>
                          <tr>
                            <td>Date</td>
                            <td>Item</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Total</td>
                          </tr>
                        </thead>
                        <tbody>
                          {element.item.map((Item) => {
                            return (
                              <tr className="m-1 ">
                                <td className="m-3">{Item.date}</td>
                                <td className="m-3">{Item.veg}</td>
                                <td className="m-3">{Item.Quantity}</td>
                                <td className="m-3">{Item.Price}</td>
                                <td className="m-3">{Item.Total}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
