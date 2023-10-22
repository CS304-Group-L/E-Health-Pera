import React from "react";
import Navbar from "../components/Navbar";

function Personinfo() {
  return (

    <div>
        <div>
            <Navbar />
        </div>

        <div class="box-border h-36 w-96 p-4 border-4 container mx-auto">
        <div className ="alig">Student Name :</div>
        <div>Student Number :</div>
        <div>Faculty :</div>
        <div justify-center flex items-center ><button class=" bg-red-800 hover:bg-yellow-300 text-black font-normal py-auto px-4 rounded h-8 w-60 items-center">See more info </button></div>
</div>


<div >
    <div class="min-h-screen flex items-center justify-center">

    <div class="flex flex-wrap justify-center space-x-2 ">

    <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
    Medical Records 
    </button>
    <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
    Medical Records 
    </button>
    <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
    Medical Reports 
    </button>
    <button class="bg-red-800 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
    Medicine Details 
    </button>
    
    </div>
</div>
</div> 
    </div>
  );
}

export default Personinfo;