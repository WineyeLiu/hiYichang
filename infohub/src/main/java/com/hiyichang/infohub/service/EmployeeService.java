package com.hiyichang.infohub.service;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Employee;

public interface EmployeeService {

    int save(Employee employee);

    int del(long id);

    int update(Employee employee);

    PageResult<Employee> page(Employee employee, Pageable pageable);

}
