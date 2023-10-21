import React from 'react';

function HealthForm() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Health Center University of Peradeniya</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Name with initials</p>
            <input className="w-full border rounded py-2 px-3" />
          </div>
          <div>
            <p>Enrollment Number</p>
            <input className="w-full border rounded py-2 px-3" />
          </div>
          
        </div>
    
        <div>
          <p>
            <strong>I certify that the information furnished by me is correct.</strong>
            <br />
            Date
            <input className="w-32 border rounded py-2 px-3" />
          </p>
        </div>
        <input type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" value="Save" />
      </form>

      <p className="text-xl mt-8">Part II</p>
    
    </div>
  );
}

export default HealthForm;