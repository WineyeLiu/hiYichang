package com.hiyichang.infohub.service.impl;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Employee;
import com.hiyichang.infohub.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Override
    public int save(Employee employee) {
        return 0;
    }

    @Override
    public int del(long id) {
        return 0;
    }

    @Override
    public int update(Employee employee) {
        return 0;
    }

    @Override
    public PageResult<Employee> page(Employee employee, Pageable pageable) {
        return null;
    }
}
