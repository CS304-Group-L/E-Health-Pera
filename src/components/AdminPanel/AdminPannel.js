import React from "react";
import Navbar from "../Home/Navbar";
//import image from "../../Assets/Photo2.jpg";
import { Link } from "react-router-dom";

function AdminPannel() {
  return (

    <div>
       <div>
           <Navbar/>
        </div>

      <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
      <div>Health Center - SERVICES</div>
      </div>
      <br/> <br/> <br/> <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
            <Link to="/adminPannel/StudentManager/StudentMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Student
                </button>
                
            </Link>
          </span>
        </div>
       
        <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
             <Link to="/adminPannel/StaffManager/StaffMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Staff
                </button>
             </Link>
          </span>
        </div>
      
        <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
             <Link to="/adminPannel/DoctorManager/DoctorMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Doctor
                </button>
             </Link>
          </span>
        </div>
       
        <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
          <Link to="/adminPannel/PharmacyManager/PharmacyMain" className="nav-link">
             <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                 Pharmacy
             </button>
          </Link>
          </span>
        </div>
        </div>
    </div>
    <br/> <br/> <br/> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
            <Link to="/adminPannel/LabManager/LabMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Laboratory
                </button>
            </Link>
          </span>
        </div>
        
        <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>

      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
             <Link to="/adminPannel/WardManager/WardMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Ward
                </button>
             </Link>
          </span>
        </div>
       
        <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>

      <div className="relative mb-12 px-3 lg:mb-0">
        <div className="mb-2 flex justify-center">
          <span className="text-primary">
             <Link to="/adminPannel/NurseManager/NurseMain" className="nav-link">
                <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-20 w-60 items-center">
                Nurse
                </button>
             </Link>
          </span>
        </div>
       <div
          className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"
        ></div>
      </div>
     
    </div>



</div>
    
  );
}
export default AdminPannel;