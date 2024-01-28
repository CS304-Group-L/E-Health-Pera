import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import HealthRecordService from '../../services/HealthRecordService.js';
import Navbar from "../Home/Navbar";

const AddHealthReport = () => {

    const [enrollmentNo, setenrollmentNo] = useState('')
    const [doctorReport, setdoctorReport] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateHealthRecord = (e) => {
        e.preventDefault();

        const healthrecord = {enrollmentNo, doctorReport}

        if(id){
            HealthRecordService.updateHealthRecord(id, healthrecord).then((response) => {
                history.push('/healthrecords')
            }).catch(error => {
                console.log(error)
            })

        }else{
            HealthRecordService.createHealthRecord(healthrecord).then((response) =>{

                console.log(response.data)
    
                history.push('/healthrecords');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        HealthRecordService.getHealthRecordById(id).then((response) =>{
            setenrollmentNo(response.data.enrollmentNo)
            setdoctorReport(response.data.doctorReport)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 ">Update Record</h2>
        }else{
            return <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 ">New Record</h2>
        }
    }

    return (
        <div>
           <div>
              <Navbar/>
           </div>
           <div className="bg-gray-100 p-8 text-2xl font-bold text-center mb-6">
             <div>Health Records - Add A Health Record</div>
           </div>
           
           <div className="container" style={{marginLeft:'auto',marginRight:'auto'}}>
          
           <div className="flex items-center justify-center">
           <div className="max-w-screen-md p-8 bg-white shadow-md rounded-lg">
            
              <div>
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Enrollment No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enrollment No"
                                        name = "enrollmentNo"
                                        className="w-full py-2 px-3 mb-6 border rounded"
                                        value = {enrollmentNo}
                                        onChange = {(e) => setenrollmentNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Doctor Report :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Doctor Report"
                                        name = "doctorReport"
                                        className="w-full py-2 px-3 mb-6 border rounded"
                                        value = {doctorReport}
                                        onChange = {(e) => setdoctorReport(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="flex justify-between mb-6">
                                  <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded" 
                                          onClick = {(e) => saveOrUpdateHealthRecord(e)} >Submit 
                                  </button>
                                  <Link to="/healthrecords">
                                     <button className="py-2 px-4 bg-red-800 hover:bg-yellow-300 text-white rounded" >Cancel
                                     </button>
                                  </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
         
           </div>
         </div>
       </div>
     </div>
    )
}

export default AddHealthReport