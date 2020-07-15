package com.hiyichang.infohub.service;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Order;

public interface OrderService {

    int save(Order order);

    int del(long id);

    PageResult<Order> page(Order order, Pageable pageable);

    int update(Order order);

}
