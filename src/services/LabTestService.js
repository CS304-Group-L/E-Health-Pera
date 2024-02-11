import axios from 'axios'

const LABTEST_BASE_REST_API_URL = 'http://localhost:8080/api/v1/labtests';

class LabTestService{

    getAllRecords(){
        return axios.get(LABTEST_BASE_REST_API_URL)
    }

    createLabTest(labtest){
        return axios.post(LABTEST_BASE_REST_API_URL, labtest)
    }

    getLabTestById(labtestId){
        return axios.get(LABTEST_BASE_REST_API_URL + '/' + labtestId);
    }

    updateLabTest(labtestId, labtest){
        return axios.put(LABTEST_BASE_REST_API_URL + '/' +labtestId, labtest );
    }

    deleteLabTest(labtestId){
        return axios.delete(LABTEST_BASE_REST_API_URL + '/' + labtestId);
    }
}

export default new LabTestService();