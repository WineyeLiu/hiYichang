package com.hiyichang.infohub.service;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Customer;

public interface CustomerService {

    int save(Customer customer);

    int del(long id);

    PageResult<Customer> page(Customer customer, Pageable pageable);

    int update(Customer customer);

}
