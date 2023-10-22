import React from "react";
import Navbar from "../components/Navbar";

function Contactus() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
      <div>Health Center - University of Peradeniya</div>
      <div className="text-base font-normal">Contact Details</div>
      </div>
      <div className="pt-8 pl-40 pr-40">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <div className="text-center pt-11"> 
            <p>Tel-Phone Number</p>
            <div className="font-bold pt-2 pb-11">
              <p>81 2222 248</p>
              <p>70 5352 568</p>
            </div>
            </div>
            <div className="text-center pt-11"> 
            <p>E-mail Adress</p>
            <div className="font-bold pt-2 pb-11">
              <p>helth.sci.pdn.ac.lk</p>
            </div>
            
            </div>
            <div className="text-center pt-11"> 
            <p>Web Link</p>
            <div className="font-bold pt-2 pb-11">
              <p>http://www.pdn.ac.lk/</p>
            </div>

          </div>
           
      </div>

      
      
    </div>
  );
}

export default Contactus;