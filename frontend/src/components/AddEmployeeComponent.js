import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history = useHistory();
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailIdError, setEmailIdError] = useState('');
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}
        
        if (!firstName.trim()) {
            setFirstNameError('First name is required');
            return;
        } else {
            setFirstNameError('');
        }

        if (!lastName.trim()) {
            setLastNameError('Last name is required');
            return;
        } else {
            setLastNameError('');
        }

        if (!emailId.trim()) {
            setEmailIdError('Email ID is required');
            return;
        } else {
            setEmailIdError('');
        }

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                history.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text" required
                                        placeholder = "Enter first name"
                                        name = "firstName" 
                                        className={`form-control ${firstNameError ? 'is-invalid' : ''}`}
                                        value = {firstName}
                                        onChange = {(e) => {
                                            setFirstName(e.target.value);
                                            setFirstNameError('');
                                        }}
                                    >
                                    </input>
                                    {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text" required
                                        placeholder = "Enter last name"
                                        name = "lastName" 
                                        className={`form-control ${lastNameError ? 'is-invalid' : ''}`}
                                        value = {lastName}
                                        onChange = {(e) => {
                                            setLastName(e.target.value);
                                            setLastNameError('')
                                        }}
                                    >
                                    </input>
                                    {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email" required
                                        placeholder = "Enter email Id"
                                        name = "emailId" 
                                        className={`form-control ${emailIdError ? 'is-invalid' : ''}`}
                                        value = {emailId}
                                        onChange = {(e) => {
                                            setEmailId(e.target.value);
                                            setEmailIdError('');
                                        }}
                                    >
                                    </input>
                                    {emailIdError && <div className="invalid-feedback">{emailIdError}</div>}
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent
