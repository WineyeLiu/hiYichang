package com.hiyichang.infohub.controller;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.common.response.Success;
import com.hiyichang.infohub.entity.Employee;
import com.hiyichang.infohub.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping
    public Success<Integer> save(Employee employee) {
        int result = employeeService.save(employee);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @DeleteMapping()
    public Success<Integer> del(long id) {
        int result = employeeService.del(id);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @PatchMapping()
    public Success<Integer> patch(Employee employee) {
        int result = employeeService.update(employee);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @GetMapping("/page")
    public Success<PageResult<Employee>> page(Employee employee, Pageable pageable) {
        PageResult<Employee> result = employeeService.page(employee, pageable);
        Success<PageResult<Employee>> success = new Success<>();
        success.setData(result);
        return success;
    }




}
