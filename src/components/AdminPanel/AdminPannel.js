import React from "react";
import Navbar from "../Home/Navbar";
//import image from "../../Assets/Photo2.jpg";
import { Link } from "react-router-dom";

import HealthRecords from "../../Assets/HealthRecords.png";
import MedicalReports from "../../Assets/MedicalReports.png";
import Medicine from "../../Assets/Medicine.png";
import LaboratoryTest from "../../Assets/LaboratoryTest.png";

function AdminPannel() {
  return (

   
    <div>
    <div>
       <Navbar/>
    </div>

 <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
     <div>Health Center - Services</div>
 </div>


  <br/><br/><br/><br/>     
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
   <div className="relative mb-12 px-3 lg:mb-0">
   <div className="mb-2 flex justify-center">
   <span className="text-primary">
         <Link to='/adminPannel/PharmacyManager/healthrecords'  className="link1" >
            <>
              {<img src={HealthRecords} alt="Health Records" style={{backgroundColor : 'white',width: 300,height: 200}}/> }
            </>
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
         <Link to='/adminPannel/PharmacyManager/healthrecords'  className="link1" >
             <>
               {<img src={MedicalReports} alt="Health Records" style={{backgroundColor : 'white',width: 300,height: 200}}/> }
             </>
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
          <Link to='/adminPannel/PharmacyManager/healthrecords'  className="link1" >
              <>
                  {<img src={Medicine} alt="Health Records" style={{backgroundColor : 'white',width: 300,height: 200}}/> }
              </>
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
           <Link to='/adminPannel/PharmacyManager/healthrecords'  className="link1" >
                 <>
                   {<img src={LaboratoryTest} alt="Health Records" style={{backgroundColor : 'white',width: 300,height: 200}}/> }
                 </>
          </Link>
   </span>
 </div>
 </div>
</div>



</div>
    
  );
}
export default AdminPannel;