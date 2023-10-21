import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Assets/University-Helth-Center-logo-with-name.png";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-[15px]  bg-red-800">
        
        <img className="h-12 ml-2 mx-px " src={logo} alt='University-Helth-Center-logo-with-name'/>
        <div>
          <ul className="flex text-[10px] uppercase text-white mr-[2] gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
          
        </div>
      
    </nav>
  );
};

export default Navbar;