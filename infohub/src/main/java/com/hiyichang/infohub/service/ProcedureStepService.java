package com.hiyichang.infohub.service;

import com.hiyichang.infohub.entity.ProcedureStep;

import java.util.List;

public interface ProcedureStepService {

    int save(ProcedureStep procedureStep);

    int delByOrderId(long orderId);

    int update(ProcedureStep procedureStep);

    List<ProcedureStep> listByOrderId(long orderId);

}
