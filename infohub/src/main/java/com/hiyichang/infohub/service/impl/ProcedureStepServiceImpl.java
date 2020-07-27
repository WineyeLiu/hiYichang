package com.hiyichang.infohub.service.impl;

import com.hiyichang.infohub.entity.ProcedureStep;
import com.hiyichang.infohub.entity.ProcedureStepExample;
import com.hiyichang.infohub.mapper.ProcedureStepMapper;
import com.hiyichang.infohub.service.ProcedureStepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcedureStepServiceImpl implements ProcedureStepService {

    private ProcedureStepMapper procedureStepMapper;

    @Autowired
    public ProcedureStepServiceImpl(ProcedureStepMapper procedureStepMapper) {
        this.procedureStepMapper = procedureStepMapper;
    }

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
        return procedureStepMapper.updateByPrimaryKeySelective(procedureStep);
    }

    @Override
    public List<ProcedureStep> listByOrderId(long orderId) {
        ProcedureStepExample example = new ProcedureStepExample();
        example.createCriteria().andOrderEqualTo(orderId);
        return procedureStepMapper.selectByExample(example);
    }
}
