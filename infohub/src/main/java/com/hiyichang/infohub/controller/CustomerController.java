package com.hiyichang.infohub.controller;

import com.hiyichang.infohub.common.pageable.PageResult;
import com.hiyichang.infohub.common.pageable.Pageable;
import com.hiyichang.infohub.common.response.Success;
import com.hiyichang.infohub.entity.Customer;
import com.hiyichang.infohub.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping()
    public Success<Integer> save(Customer customer) {
        int result = customerService.save(customer);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @DeleteMapping("/{id}")
    public Success<Integer> del(@PathVariable long id) {
        int result = customerService.del(id);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @GetMapping("/page")
    public Success<PageResult<Customer>> page(Customer customer, int size, int index) {
        Pageable pageable = new Pageable();
        pageable.setIndex(index);
        pageable.setSize(size);
        PageResult<Customer> result = customerService.page(customer, pageable);
        Success<PageResult<Customer>> success = new Success<>();
        success.setData(result);
        return success;
    }

    @PatchMapping()
    public Success<Integer> patch(Customer customer) {
        int result = customerService.update(customer);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

}
