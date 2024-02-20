import axios from 'axios'

const apiUrl = 'http://localhost/api/v1/employees';

class EmployeeService {

    getAllEmployees() {
        return axios.get(apiUrl);
    }

    createEmployee(employee) {
        return axios.post(apiUrl,apiUrl);
    }

    getEmployeeById(employeeId) {
        return axios.get(apiUrl + '/' + employeeId);
    }

    updateEmployee(employeeId,employee) {
        return axios.put(apiUrl + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(apiUrl + '/' + employeeId);
    }
}
export default new EmployeeService();