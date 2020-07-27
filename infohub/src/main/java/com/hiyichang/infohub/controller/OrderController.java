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

    @PostMapping(consumes = "application/json")
    public Success<Integer> save(@RequestBody Order order) {
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
    public Success<Integer> patch(@RequestBody Order order) {
        int result = orderService.update(order);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @GetMapping("/page")
    public Success<PageResult<Order>> page(@RequestParam int index, @RequestParam int size,
                                           @RequestParam(required = false) String sort) {
        Order order = new Order();
        Pageable pageable = new Pageable();
        pageable.setSize(size);
        pageable.setIndex(index);
        pageable.setSort(sort);
        PageResult<Order> result = orderService.page(order, pageable);
        Success<PageResult<Order>> success = new Success<>();
        success.setData(result);
        return success;
    }

}
