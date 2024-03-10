package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    Employee getEmployeeById(Long employeeId);

    List<Employee> getAllEmployees();

    Employee updateEmployee(Long employeeId, Employee updatedEmployee);

    void deleteEmployee(Long employeeId);
}
