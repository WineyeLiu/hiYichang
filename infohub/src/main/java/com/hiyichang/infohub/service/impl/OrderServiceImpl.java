package com.hiyichang.infohub.service.impl;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Order;
import com.hiyichang.infohub.service.OrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Override
    public int save(Order order) {
        return 0;
    }

    @Override
    public int del(long id) {
        return 0;
    }

    @Override
    public PageResult<Order> page(Order order, Pageable pageable) {
        return null;
    }

    @Override
    public int update(Order order) {
        return 0;
    }
}
