import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import AdminPannel from "./components/AdminPanel/AdminPannel";
import About from "./components/Home/About";
import Contactus from "./components/Home/Contactus";
import Login from "./components/Home/Login";

import PharmacyMain from "./components/PharmacyManager/PharmacyMain";
import LabTestList from "./components/PharmacyManager/LabTestList";
import UpdateLabTestForm from "./components/PharmacyManager/UpdateLabTestForm";
import AddNewLabTest from "./components/PharmacyManager/AddNewLabTest";

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
          
          <Route path='/adminPannel/PharmacyManager/labtests' element={<LabTestList/>}/>
          <Route path='/adminPannel/PharmacyManager/new-labrecord' element={<AddNewLabTest/>}/>
          <Route path='/adminPannel/PharmacyManager/edit-labrecord/:id' element={<UpdateLabTestForm/>}/>
              
       
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
