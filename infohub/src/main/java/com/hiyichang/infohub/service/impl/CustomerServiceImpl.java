package com.hiyichang.infohub.service.impl;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Customer;
import com.hiyichang.infohub.service.CustomerService;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Override
    public int save(Customer customer) {
        return 0;
    }

    @Override
    public int del(long id) {
        return 0;
    }

    @Override
    public PageResult<Customer> page(Customer customer, Pageable pageable) {
        return null;
    }

    @Override
    public int update(Customer customer) {
        return 0;
    }
}
