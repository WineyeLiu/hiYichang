package com.hiyichang.infohub.service.impl;

import com.github.pagehelper.PageHelper;
import com.hiyichang.infohub.common.enums.ProcedureEnum;
import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.entity.Order;
import com.hiyichang.infohub.entity.OrderExample;
import com.hiyichang.infohub.entity.ProcedureStep;
import com.hiyichang.infohub.mapper.OrderMapper;
import com.hiyichang.infohub.mapper.ProcedureStepMapper;
import com.hiyichang.infohub.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrderServiceImpl.class);

    private final OrderMapper orderMapper;

    private final ProcedureStepMapper procedureStepMapper;

    @Autowired
    public OrderServiceImpl(OrderMapper orderMapper, ProcedureStepMapper procedureStepMapper) {
        this.orderMapper = orderMapper;
        this.procedureStepMapper = procedureStepMapper;
    }

    @Override
    public int save(Order order) {

        int result = orderMapper.insert(order);
        long orderId = order.getId();
        LOGGER.info("order's id: {}", orderId);

        // generate procedure steps
        for (ProcedureEnum procedure : ProcedureEnum.values()) {
            ProcedureStep procedureStep = new ProcedureStep();
            procedureStep.setOrderId(orderId);
            procedureStep.setName(procedure.getName());
            procedureStepMapper.insert(procedureStep);
        }

        return result;
    }

    @Override
    public int del(long id) {
        Order example = new Order();
        example.setId(id);
        example.setDeleteFlag("1");
        return orderMapper.updateByPrimaryKeySelective(example);
    }

    @Override
    public PageResult<Order> page(Order order, Pageable pageable) {

        // construct a example object
        OrderExample orderExample = new OrderExample();
        orderExample.createCriteria().andDeleteFlagEqualTo("0");

        PageHelper.startPage(pageable.getIndex(), pageable.getSize());
        List<Order> list = orderMapper.selectByExample(orderExample);

        long total = orderMapper.countByExample(orderExample);

        PageResult<Order> result = new PageResult(list, pageable, total);
        return result;
    }

    @Override
    public int update(Order order) {

        return orderMapper.updateByPrimaryKeySelective(order);
    }
}
