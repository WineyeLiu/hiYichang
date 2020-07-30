import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderServiceService } from '../order-service.service'
import { Order } from '../entity/order';
import { StepStatus, ProcedureStep } from '../entity/step'
import { XTableColumn } from '@ng-nest/ui/table';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
import { XPlace } from '@ng-nest/ui/core';
import { XFormRow, XFormComponent } from '@ng-nest/ui/form';
import { XSelectNode } from '@ng-nest/ui/select';
import { XData, XQuery, XNumber } from '@ng-nest/ui/core';
import { XMessageService } from '@ng-nest/ui/message';
import { XStepsNode } from '@ng-nest/ui/steps';

const SELECT_DATA: XData<XSelectNode> = [{id:1, label:'张山'}, {id:12, label:"李四"}]

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
      private orderService: OrderServiceService,
      private xMessageBoxService: XMessageBoxService,
      private xMessageService: XMessageService
    ) { }

  ngOnInit(): void {
    this.getData();
  }
// --  table 
  auth = {};
  index = 1;
  size = 10;
  total = 0;
  data: Order[] = [];
  columns: XTableColumn[] = [
    { id: 'id', label: 'ID', flex: 0.4, left: 0},
    { id: 'customerId', label: '用户ID', flex: 0.4},
    { id: 'orderDescription', label: '订单描述', flex: 0.5},
    { id: 'status', label: '状态', flex: 0.5 },
    { id: 'actions',label: '操作', flex: 0.5, action: true}
  ];

  getData():void {
    this.orderService.getOrderPageData(this.index, this.size).subscribe( x => {
        console.log(x.data)
        this.data = x.data.data;
        this.total = x.data.total;
      }
    )
  }

  indexChange(index: number) {
    this.index = index;
    this.getData();
  }

  // --- 
  visible: boolean;
  placement: XPlace;

  delOrder(row: any) {
    console.log('del ' + row.id);
    this.xMessageBoxService.confirm({
      title: '提示',
      content: `此操作将删除ID:${row.id}的订单数据，是否继续？`,
      type: 'warning',
      callback: (action: XMessageBoxAction) => {
        action === 'confirm' && this.orderService.delOrderById(row.id).subscribe((x )=>{
          if (x.status == 0 && x.data == 1) {
            this.getData();
            this.xMessageService.success('删除成功');
          }
        });
      }
    });
  }

  updateOrder(row: any) {
    console.log('update ' + row.id);
    this.visible = true;

  }

  addOrderDialog(place: XPlace) {
    this.placement = place;
    this.visible = true;
  }

  confirm() {
    console.log("confirm ok");
    console.log(this.form);
    if (this.getValidStatus()) {
      this.orderService.addOrder(this.form.formGroup.value).subscribe((x) => {
        if (x.status == 0) {
          this.xMessageService.success("新建订单成功");
          this.getData();
        } else {
          this.xMessageService.error("新增订单失败，服务器错误~")
        }
      });
    } else {
      this.xMessageService.warning("请检查订单数据"); 
    }
  }

  cancel() {

  }

  getValidStatus() {
    return this.form?.formGroup?.status == "VALID"
  }

  @ViewChild('form') form: XFormComponent;

  controls:XFormRow[] = [
    {
      title: "基本信息",
      icon: '',
      controls: [
        { control: 'input', id: 'id', hidden: true},
        { control: 'select', id: 'customerId', label: '客户', span: 8, data: SELECT_DATA, required: true },
        { control: 'input', id: 'orderDescription', label: '订单描述'},
        { control: 'input-number', id: 'price', label: '价格'}
      ]
    }
  ];


  stepVisible:boolean;
  stepPlacement:XPlace = "center";
  stepConfirmText:string = "关闭";
  orderSteps(row: any) {
    console.log('steps of ' + row.id);
    
    this.orderService.getStepsByOrderId(row.id).subscribe((x) => {

      console.log(x);
      let tempdata: XStepsNode[] = [];
      this.originData = x.data;
      for (let index = 0; index < x.data.length; index++) {
        const e = x.data[index];
        if(+e.status == StepStatus.UNFINISHED) {
          this.activeStep = index;
          break;
        }
      }

      x.data.forEach(element => {
        let a:XStepsNode ={};
        a.label = element.name;
        a.description = element.remark;
        a.status = +element.status == StepStatus.FINISHED? 'finish' : 'wait';
        tempdata.push(a);
        
      });
      this.stepData = tempdata;
      this.stepData[this.activeStep].status = 'process';
    }); 
    console.log('---stepData---');
    console.log(this.stepData);

    this.stepVisible = true;
  }
  originData: ProcedureStep[];
  stepData: XData<XStepsNode> = [];
  activeStep: number = -1;

}
