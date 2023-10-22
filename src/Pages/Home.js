import React from "react";
import Navbar from "../components/Navbar";
import photo from "../Assets/photo.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="bg-white rounded overflow-hidden pt-5 "></div>

      <div className="flex divide-x pl-5 pr-5">
        <div className="flex flex-col w-80 ">
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60 items-center">
              Notice Board
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60">
              Updates
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60">
              News
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60">
              Articals
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60">
              Event
            </button>
          </div>
          <div className="my-2"></div>
          <div>
            <button className="bg-red-800 hover:bg-yellow-300 text-white font-bold py-auto px-4 rounded h-8 w-60">
              Other
            </button>
          </div>
          <div className="my-2"></div>
          <div className="text-center">
            In case Of Emergency
            <div className=" flex flex-col">
              <div className="text-center text-lg font-bold">81 2222 248</div>
              <div className="text-center text-lg font-bold">70 5352 568</div>
            </div>
          </div>
        </div>

        <div className="w-full bg-yellow-300 object-none h-200 object-cover object-cover">
           {<img src={photo} alt="University of Peradeniya Photo" /> }
        </div>
      </div>

      <div className="pt-11 text-center text-2xl">
        <p>This is our vision</p>
      </div>
      <div className="pt-8 pl-40 pr-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.</div>
      
    </div>
  );
}
