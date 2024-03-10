package net.javaguides.springboot.impl;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.service.*;
import net.javaguides.springboot.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    // private final EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    // @Autowired
    // private DepartmentRepository departmentRepository;

    // @Autowired
    // public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
    //     this.employeeRepository = employeeRepository;
    // }

    @Override
    public Employee createEmployee(Employee employee) {
        // if (employee.getDepartment() != null && employee.getDepartment().getId() != null) {
        //     Department department = departmentRepository.findById(employee.getDepartment().getId())
        //         .orElseThrow(() -> new DepartmentNotFoundException("Department not found with id: " + employee.getDepartment().getId()));
        //     employee.setDepartment(department);
        // }
        return employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployee(Long employeeId, Employee updatedEmployee) {
        Employee existingEmployee = getEmployeeById(employeeId);

        // Update existingEmployee with the values from updatedEmployee
        existingEmployee.setFirstName(updatedEmployee.getFirstName());
        existingEmployee.setLastName(updatedEmployee.getLastName());
        existingEmployee.setEmailId(updatedEmployee.getEmailId());
        existingEmployee.setDepartment(updatedEmployee.getDepartment());

        return employeeRepository.save(existingEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee existingEmployee = getEmployeeById(employeeId);
        employeeRepository.delete(existingEmployee);
    }
}

