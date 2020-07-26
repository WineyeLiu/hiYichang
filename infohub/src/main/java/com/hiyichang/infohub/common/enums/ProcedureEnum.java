package com.hiyichang.infohub.common.enums;

public enum ProcedureEnum {


    BIZ_COMMUNICATE(1, "商务沟通"),
    TRY_TO_EAT(2, "试吃"),
    SIGN_CONTRACT(3,"合同签订"),
    PRE_PAY(4, "支付预付款"),
    CHK_LOCATION(5, "查看地图定位"),
    MK_GROUP_CONJ(6, "建群对接"),
    EAT_TRY_RESPONSE(7, "试吃反馈"),
    CHK_STORE_MK_IDEA(8,"探店策划"),
    EAT_BROADCAST(9, "吃播就位"),
    MK_STORE_FILM(10, "探店拍摄"),
    VIDEO_EFFECTS(11, "后期制作（3-7天）"),
    INNER_REVIEW(12, "内部审核"),
    CONSUMER_REVIEW(13, "商家审核"),
    SET_PAPER(14, "定稿"),
    RISK_CONTROL(15, "风控"),
    REST_PAY(16, "支付尾款"),
    VIDEO_DELIVER(17, "发布视频"),
    NOTIFY_CONSUMER(18, "告知商家");

    private final int id;
    private final String name;

    ProcedureEnum(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
