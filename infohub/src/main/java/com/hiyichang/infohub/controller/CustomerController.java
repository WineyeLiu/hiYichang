package com.hiyichang.infohub.controller;

import com.hiyichang.infohub.common.response.Success;
import com.hiyichang.infohub.entity.Customer;
import com.hiyichang.infohub.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
