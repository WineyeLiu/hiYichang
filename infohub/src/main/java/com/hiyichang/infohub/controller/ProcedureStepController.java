package com.hiyichang.infohub.controller;


import com.hiyichang.infohub.common.response.Success;
import com.hiyichang.infohub.entity.ProcedureStep;
import com.hiyichang.infohub.service.ProcedureStepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/step")
public class ProcedureStepController {

    private ProcedureStepService procedureStepService;

    @Autowired
    public ProcedureStepController(ProcedureStepService procedureStepService) {
        this.procedureStepService = procedureStepService;
    }

    @PatchMapping
    public Success<Integer> patch(@RequestBody ProcedureStep procedureStep) {
        int result = procedureStepService.update(procedureStep);
        Success<Integer> success = new Success<>();
        success.setData(result);
        return success;
    }

    @GetMapping("/oid_{orderId}")
    public Success<List<ProcedureStep>> listByOrderId(@PathVariable long orderId) {
        List<ProcedureStep> list = procedureStepService.listByOrderId(orderId);
        Success<List<ProcedureStep>> success = new Success<>();
        success.setData(list);
        return success;
    }

}
