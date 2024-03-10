package net.javaguides.springboot.impl;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Department;
import net.javaguides.springboot.service.*;
// import net.javaguides.springboot.exception.*;
import net.javaguides.springboot.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    // private final DepartmentRepository departmentRepository;
    @Autowired 
    private DepartmentRepository departmentRepository;


    @Autowired
    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartmentById(Long departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with ID: " + departmentId));
    }
}
