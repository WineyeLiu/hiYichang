import { Component, OnInit, ViewChild } from '@angular/core';
import { XTableColumn } from '@ng-nest/ui/table';
import { CustomerService } from '../customer.service';
import { XPlace } from '@ng-nest/ui/core';
import { XFormRow, XFormComponent } from '@ng-nest/ui/form';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
import { XMessageService } from '@ng-nest/ui/message';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private xMessageBoxService: XMessageBoxService,
    private xMessageService: XMessageService
  ) { }

  @ViewChild('form') form: XFormComponent;

  ngOnInit(): void {
    this.getTableData();
  }

  index = 1;
  size = 10;
  total = 0;
  data: any[] = [];
  columns: XTableColumn[] = [
    { id: 'id', label: '用户ID', flex: 0.4, left: 0},
    { id: 'customerFirstname', label: '用户姓名', flex: 0.5},
    { id: 'customerTitle', label: '称呼', flex: 0.5 },
    { id: 'phoneNumber',label: '电话', flex: 0.5},
    { id: 'actions',label: '操作', flex: 0.5, action: true}
  ];


  indexChange(index: number) {
    this.getTableData();
  }

  delCustomer(row: any) {
    this.xMessageBoxService.confirm({
      title: '提示',
      content: `此操作将删除ID:${row.id}的客户数据，是否继续？`,
      type: 'warning',
      callback: (action: XMessageBoxAction) => {
        action === 'confirm' && this.customerService.del(row.id).subscribe((x )=>{
          if (x.status == 0 && x.data == 1) {
            this.getTableData();
            this.xMessageService.success('删除成功');
          }
        });
      }
    });
  }

  addCustomerDialog() {
    this.visible = true;
  }

  getTableData() {
    this.customerService.page(this.index, this.size).subscribe((x) => {
      this.data = x.data.data;
      this.total = x.data.total;
    });
  }

  getValidStatus() {
    return this.form?.formGroup?.status == "VALID"
  }


  visible: boolean;
  placement: XPlace = 'center';

  confirm(){
    if(this.getValidStatus()) {
      this.customerService.save(this.form.formGroup.value).subscribe((x) => {
        if(x.status == 0) {
          this.getTableData();
          this.xMessageService.success("新增客户成功！");
        } else {
          this.xMessageService.error('新增客户失败！请联系老板！');
        }
      });
    } else {
      this.xMessageService.warning('新增失败，请检查填写信息是否符合！');
    }
  }

  controls:XFormRow[] = [
    {
      title:'客户基本信息',
      controls: [
        { control: 'input', id: 'id', hidden: true},
        { control: 'input', id: 'customerFirstname', label: '用户姓名', required: true},
        { control: 'input', id: 'customerTitle', label: '客户称呼'},
        { control: 'input', id: 'phoneNumber',label: '电话号码', pattern: new RegExp(/^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/, 'i')}
      ]
    }

  ]

}
