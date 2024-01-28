import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import AdminPannel from "./components/AdminPanel/AdminPannel";
import About from "./components/Home/About";
import Contactus from "./components/Home/Contactus";
import Login from "./components/Home/Login";

import PharmacyMain from "./components/PharmacyManager/PharmacyMain";
import HealthReportList from "./components/PharmacyManager/HealthReportList";
import AddHealthReport from "./components/PharmacyManager/AddHealthReport";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        
        
          <Route exact path = "/" element = {<Home/>}/>
             
        
          <Route path='/about' element={<About/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/login' element={<Login/>}/>
        
          <Route path='/adminPannel' element={<AdminPannel/>}/>
          <Route path='/adminPannel/PharmacyManager/PharmacyMain' element={<PharmacyMain/>}/>
          <Route path='/adminPannel/PharmacyManager/healthrecords' element={<HealthReportList/>}/>
          <Route path='/adminPannel/PharmacyManager/add-healthrecord' element={<AddHealthReport/>}/>
          <Route path='/adminPannel/PharmacyManager/edit-healthrecord/:id' element={<AddHealthReport/>}/>
              
       
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
