import React from 'react';
import Navbar from '../components/Navbar';

function HealthForm() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
      <div>Health Center University of Peradeniya</div>
      <div className="text-base font-normal">Student registation form</div>
      </div>
      <div>
        <div>Name with initials</div>
        <div>Enrolment Number</div>
        <div>National ID Number</div>
        <div>A/L Index No </div>
        <div>Date of Birth  </div>
        <div>Sex </div>
        <div>Nationality </div>
        <div>Religion </div>
        <div>Single/Married</div>
        <div>Adress </div>
        <div>Attended School (O/L) </div>
        <div>Attended School (O/L)</div>
        <div>Extra Curricular Activities/ Sport</div>
        <div>Is Mother Living</div>
        <div>If Dead what is the reson</div>
        <div>Is Father Living</div>
        <div>If Dead what is the reson</div>
        <div>Mother's Occupation </div>
        <div>Father's Occupation</div>
        <div>No of Brothers and Sisters</div>
        <div>ages</div>
        <div>Vegetarian or Non-Vegetarian</div>
        <div>Have you been admitted to the Hospital in the past? If so wht is the condition? Have you undergone majoir surgery?</div>
        <div>Are you taking treatment for a chronic disease? If so what?(eg. Diabetes mellitus, Bronchilal Asthma, Mental illness, Epilepsy, Arthritis, Heart diseases, Eczema ect) </div>
        <div>Have you any physical disability? If so What type? Does it require any assistance by the University </div>
        <div>Are you having Allergy to food or drugs? Please specify</div>
        <div>Person to be contacted in an emergency? </div>
        <div>Adress of the person to be contacted in an emergency</div>
        <div>Telephone Numbe person to be contacted in an emergency</div>
      </div>
    </div>







    // <div className="bg-gray-100 p-8">
    //   <h1 className="text-2xl font-bold text-center mb-6">Health Center University of Peradeniya</h1>
    //   <form>
    //     <div className="grid grid-cols-2 gap-4">
    //       <div>
    //         <p>Name with initials</p>
    //         <input className="w-full border rounded py-2 px-3" />
    //       </div>
    //       <div>
    //         <p>Enrollment Number</p>
    //         <input className="w-full border rounded py-2 px-3" />
    //       </div>
    //     </div>
    //     <div>
    //       <p>
    //         <strong>I certify that the information furnished by me is correct.</strong>
    //         <br />
    //         Date
    //         <input className="w-32 border rounded py-2 px-3" />
    //       </p>
    //     </div>
    //     <input type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" value="Save" />
    //   </form>

    //   <p className="text-xl mt-8">Part II</p>
    // </div>
  );
}

export default HealthForm;
