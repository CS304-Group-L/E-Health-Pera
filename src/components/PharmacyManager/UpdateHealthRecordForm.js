import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HealthRecordService from '../../services/HealthRecordService.js';
import Navbar from "../Home/Navbar";

function UpdateHealthRecordForm() {
    const [enrollmentNo, setEnrollmentNo] = useState('');
    const [doctorReport, setDoctorReport] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            HealthRecordService.getHealthRecordById(id)
                .then((response) => {
                    setEnrollmentNo(response.data.enrollmentNo);
                    setDoctorReport(response.data.doctorReport);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const updateHealthRecord = (e) => {
        e.preventDefault();

        const healthrecord = { enrollmentNo, doctorReport };

        HealthRecordService.updateHealthRecord(id, healthrecord)
            .then((response) => {
                console.log(response.data);
                alert('Health record successfully updated!');
                history('/HealthReportList.js');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
                <div>Health Records - Update A Health Record</div>
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
                                    <label className="form-label"> Doctor Report :</label>
                                    <input
                                        type="text"
                                        placeholder="Doctor Report"
                                        name="doctorReport"
                                        className="w-full py-2 px-3 mb-6 border rounded"
                                        value={doctorReport}
                                        onChange={(e) => setDoctorReport(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-between mb-6">
                                    <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded" onClick={(e) => updateHealthRecord(e)}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateHealthRecordForm;
