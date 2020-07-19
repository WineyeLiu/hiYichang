package com.hiyichang.infohub.service.impl;

import com.hiyichang.infohub.entity.ProcedureStep;
import com.hiyichang.infohub.service.ProcedureStepService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcedureStepServiceImpl implements ProcedureStepService {
    @Override
    public int save(ProcedureStep procedureStep) {
        return 0;
    }

    @Override
    public int delByOrderId(long orderId) {
        return 0;
    }

    @Override
    public int update(ProcedureStep procedureStep) {
        return 0;
    }

    @Override
    public List<ProcedureStep> listByOrderId(long orderId) {
        return null;
    }
}
