import React from "react";
import Navbar from "../components/Navbar";
import image from "../Assets/Photo2.jpg";

function Services() {
  return (

    <div>
        <div>
            <Navbar />
        </div>


        <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
      <div>Health Center - University of Peradeniya</div>
      <div className="text-base font-normal">SERVICES </div>
      </div>
        
      <div >
      <div class="min-h-full pt-1 flex items-center justify-center">

      <div class="flex flex-wrap justify-center space-x-2 pt-32">

      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Student
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Staff
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Doctor
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Pharmacy
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Laboratory
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
        Ward
      </button>
      <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Nurse
      </button>
    </div>
  </div>
</div>
</div>
    
  );
}
export default Services;