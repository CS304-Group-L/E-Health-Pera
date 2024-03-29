import React, { useState, useEffect } from 'react';
import LabTestService from '../../services/LabTestService';
import { Link } from 'react-router-dom';
import Navbar from "../Home/Navbar";

function LabTestList() {
    const [labtests, setLabTests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getAllRecords();
    }, []);

    const getAllRecords = () => {
        LabTestService.getAllRecords()
            .then((response) => {
                setLabTests(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteLabTest = (recordId) => {
        LabTestService.deleteLabTest(recordId)
            .then(() => {
                getAllRecords();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const filteredRecords = labtests.filter((record) =>
        record.enrollmentNo.includes(searchTerm)
    );

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
                <div>Laboratory - Lab Tests List</div>
            </div>
            <br />
            <br />
            <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <center>
                    <form controlId="formBasicSearchBar">
                        <input
                            type="text"
                            placeholder="Search by Enrollment ID"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </form>
                </center>

                <Link to="/adminPannel/PharmacyManager/new-labrecord" className="btn btn-primary mb-2">
                    <button style={{ marginLeft: '10px', backgroundColor: '#E4A11B', padding: 10 }}>Add New Record</button>
                </Link>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">ID</th>
                                            <th scope="col" className="px-6 py-4">Enrollment No</th>
                                            <th scope="col" className="px-6 py-4">Test Name</th>
                                            <th scope="col" className="px-6 py-4">Doctor Name</th>
                                            <th scope="col" className="px-6 py-4">Update/Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRecords.map((labtest) => (
                                            <tr key={labtest.id} className="border-b font-medium dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{labtest.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{labtest.enrollmentNo}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{labtest.testName}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{labtest.doctorName}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    <Link className="btn btn-info" to={`/adminPannel/PharmacyManager/edit-labrecord/${labtest.id}`}><button style={{ marginLeft: '10px', backgroundColor: '#54B4D3', padding: 10 }}>Update</button></Link>
                                                    <button className="btn btn-danger" onClick={() => deleteLabTest(labtest.id)} style={{ marginLeft: '10px', backgroundColor: '#DC4C64', padding: 10 }}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabTestList;
