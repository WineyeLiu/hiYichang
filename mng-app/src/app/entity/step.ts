export interface ProcedureStep {
    id?:number;
    orderId?:number;
    name:string;
    remark?:string;
    finishDatetime?:string;
    expectDeliverTime?:string;
    operatorEmployeeId?:number;
    status?:string;
}

export enum StepStatus {
    UNFINISHED,
    FINISHED
}