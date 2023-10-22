import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
        <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
        <div>Health Center - University of Peradeniya</div>
        <div className="text-base font-normal">ABOUT US </div>
      <div>
      </div>
      </div>
      <div className="pt-8 pl-40 pr-40">
        <div><p>The Health Centre was established in 1952 in the University of Ceylon, Peradeniya during the tenure of 
          Professor Ivor Jennings as the Vice-chancellor. Its primary objective was to provide health care 
          for resident students and the University community. In catering to primary healthcare needs, the 
          Health Centre operates a full-fledged laboratory services, 24 hour ambulance service and a preventive 
          health care service .</p></div>
          <div className="pt-5"><p>It is situated in a picturesque setting on the Sangamitta Hill at the southern end of the university. 
          Its staff comprising the Chief Medical Officer (Head of Department), four medical officers and other 
          supportive staff are dedicated to cater to the health care needs of the University community including 
          the non-resident students and employees</p>
<         /div>
<div className="font-bold pt-10">
  <p>An Outpatient Treatment Department (OPD)</p>
</div>
<div className="font-normal">
  <p>The OPD is open from 8.30 am to 12.30 pm and 2.30 pm to 4.30 pm during week days, and from 9.00 am to 11.00 am on weekends. However, 
    emergency cases are attended to throughout day and night (OPD)</p>
</div>

<div className="font-bold pt-10">
  <p>A 24-hour indoor treatment facility (OPD)</p>
</div>
<div className="font-normal">
  <p>Patients who need indoor treatment are admitted to the male and female wards at any time of the day or night. 
    Two isolation wards are available to treat students with infectious diseases (Mumps, Chicken Pox etc.). 
    A well-equipped laboratory is available to carry out investigations required by the university medical Officers.</p>
</div>

<div className="font-bold pt-10">
  <p>A pharmacy</p>
</div>
<div className="font-normal">
  <p>It issues medicines for the prescriptions by the University Medical officers.</p>
</div>


<div className="font-bold pt-10">
  <p>A 24-hour ambulance service</p>
</div>
<div className="font-normal">
  <p>This service may be obtained at the request made through the Warden, Sub Warden, Dean or Assistant Registrar.</p>
</div>

<div className="font-bold pt-10">
  <p>Immunizations</p>
</div>
<div className="font-normal">
  <p>mmunization programs are carried out for Hepatitis B vaccine (for Dental, Allied Health & Medical students) 
    and Anti Rabies Vaccine, Tetanus toxoid vaccine are administered to Veterinary Science students when necessary. 
    The H1N1 and the Rubella vaccines are given only when there is an epidemic under the guidance of the Epidemiologist.</p>
</div>


<div className="font-bold pt-10">
  <p>Psychological Counseling</p>
</div>
<div className="font-normal">
  <p>Stress, anxiety and various psychosomatic illnesses are quite common amongst the university community and the university 
    medical officers have received specialized training in psychological counseling to help/treat members of the university community.</p>
</div>


<div className="font-bold pt-10">
  <p>Preventive health care</p>
</div>
<div className="font-normal">
  <p>This is given great emphasis. Public Health Inspectors and a work force of trained personnel provide these services under the 
    supervision of the Chief Medical Officer (CMO). Their responsibilities include monitoring food hygiene, ensuring 
    purity of drinking water, maintenance of the university sewerage, garbage disposal, environmental sanitation and pest control.</p>
</div>

           
      </div>
    </div>
    
  );
}

export default About;