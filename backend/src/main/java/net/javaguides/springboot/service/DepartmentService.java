package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Department;
// import net.javaguides.springboot.repository.DepartmentRepository;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;

public interface DepartmentService {

    // @Autowired
    // private DepartmentRepository departmentRepository;

    Department createDepartment(Department department);

    List<Department> getAllDepartments();

    Department getDepartmentById(Long departmentId);
}
