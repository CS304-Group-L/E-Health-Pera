import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LabTestService from '../../services/LabTestService.js';
import Navbar from "../Home/Navbar.js";

function UpdateLabTestForm() {
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [testName, settestName] = useState('');
    const [doctorName, setdoctorName] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            LabTestService.getLabTestById(id)
                .then((response) => {
                    setEnrollmentNo(response.data.enrollmentNo);
                    settestName(response.data.testName);
                    setdoctorName(response.data.doctorName);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const updateLabTest = (e) => {
        e.preventDefault();

        const labtest = { enrollmentNo, testName, doctorName };

        LabTestService.updateLabTest(id, labtest)
            .then((response) => {
                console.log(response.data);
                alert('Lab Test successfully updated!');
                history('/LabTestList.js');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
                <div>Lab Tests - Update A Lab Test</div>
            </div>
            <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <div>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Update Record</h2>
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
                                    />
                                </div>
                                <div className="flex justify-between mb-6">
                                    <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded" onClick={(e) => updateLabTest(e)}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateLabTestForm;
