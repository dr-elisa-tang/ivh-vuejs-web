import axios from 'axios';

class EmployeeAppraisalsService{

    getAppraisalViewByEmployeeId(){
        return axios.get('http://localhost:8080/appraisal//view/employeeId/${employeeId}');
    }
}

export default new EmployeeAppraisalsService();