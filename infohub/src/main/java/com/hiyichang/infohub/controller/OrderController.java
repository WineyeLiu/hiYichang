package com.hiyichang.infohub.controller;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.common.response.Success;
import com.hiyichang.infohub.entity.Order;
import com.hiyichang.infohub.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public Success<Integer> save(Order order) {
        int result = orderService.save(order);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @DeleteMapping("/{id}")
    public Success<Integer> del(@PathVariable long id) {
        int result = orderService.del(id);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @PatchMapping()
    public Success<Integer> patch(Order order) {
        int result = orderService.update(order);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @GetMapping("/page")
    public Success<PageResult<Order>> page(Order order, Pageable pageable) {
        PageResult<Order> result = orderService.page(order, pageable);
        Success<PageResult<Order>> success = new Success<>();
        success.setData(result);
        return success;
    }

}
