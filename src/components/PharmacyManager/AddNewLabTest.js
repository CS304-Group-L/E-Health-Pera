import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LabTestService from '../../services/LabTestService.js';
import Navbar from "../Home/Navbar.js";

function AddNewLabTest() {
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [testName, settestName] = useState('');
    const [doctorName, setdoctorName] = useState('');
    const history = useNavigate();

    const saveLabTest = (e) => {
        e.preventDefault();

        // Check if the form is valid before submitting
        if (enrollmentNo.trim() === '' || testName.trim() === '' || doctorName.trim() === '') {
            alert('Please fill out all required fields.');
            return;
        }

        const labTest = { enrollmentNo, testName, doctorName };

        LabTestService.createLabTest(labTest)
            .then((response) => {
                console.log(response.data);
                // Display alert message upon successful addition
                alert('Lab test successfully added!');
                // Navigate to HealthReportList.js after clicking "OK" in the alert message
                history('/LabTestList');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
                <div> Lab Tests - Add A Lab Test</div>
            </div>
            <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="flex items-center justify-center">
                    <div className="max-w-screen-md p-8 bg-white shadow-md rounded-lg">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">New Record</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <label className="form-label"> Enrollment No :</label>
                                        <input
                                            type="text"
                                            placeholder="Enrollment No"
                                            name="enrollmentNo"
                                            className="w-full py-2 px-3 mb-6 border rounded"
                                            value={enrollmentNo}
                                            onChange={(e) => setEnrollmentNo(e.target.value)}
                                            required // Add required attribute for validation
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label"> Test Name :</label>
                                        <input
                                            type="text"
                                            placeholder="Test Name"
                                            name="testName"
                                            className="w-full py-2 px-3 mb-6 border rounded"
                                            value={testName}
                                            onChange={(e) => settestName(e.target.value)}
                                            required // Add required attribute for validation
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label"> Doctor Name :</label>
                                        <input
                                            type="text"
                                            placeholder="Doctor Name"
                                            name="doctorName"
                                            className="w-full py-2 px-3 mb-6 border rounded"
                                            value={doctorName}
                                            onChange={(e) => setdoctorName(e.target.value)}
                                            required // Add required attribute for validation
                                        />
                                    </div>
                                    <div className="flex justify-between mb-6">
                                        <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded" onClick={(e) => saveLabTest(e)}>Submit</button>
                                        <Link to="/healthrecords">
                                            <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded">Cancel</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewLabTest;
