import { Component, OnInit, ViewChild, SimpleChange } from '@angular/core';
import { XTableColumn } from '@ng-nest/ui/table';
import { EmployeeService } from '../employee.service';
import { XPlace } from '@ng-nest/ui/core';
import { XFormRow, XFormComponent } from '@ng-nest/ui/form';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
import { XMessageService } from '@ng-nest/ui/message';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private xMessageBoxService: XMessageBoxService,
    private xMessageService: XMessageService
  ) { }

  ngOnInit(): void {
    this.getTableData();
  }

  index = 1;
  size = 10;
  total = 0;
  data: any[] = [];
  columns: XTableColumn[] = [
    { id: 'id', label: 'ID号', flex: 0.4, left: 0},
    { id: 'accountId', label: '登陆名', flex: 0.5},
    { id: 'name', label: '姓名', flex: 0.5 },
    { id: 'phoneNumber',label: '电话', flex: 0.5},
    { id: 'actions',label: '操作', flex: 0.5, action: true}
  ];

  @ViewChild('form') form: XFormComponent;

  visible: boolean;
  placement: XPlace = 'center';

  addDialog() {
    this.form.formGroup.reset();
    this.visible =true;
  }

  indexChange(index: number) {
    this.index = index;
    this.getTableData();
  }

  getTableData() {
    this.employeeService.page(this.index, this.size).subscribe((x) => {
      if(x.status == 0) {
        this.data = x.data.data;
        this.total = x.data.total;
      }
    });
  }

  delEmployee(row:any) {
    this.xMessageBoxService.confirm({
      title: '提示',
      content: `此操作将删除ID:${row.id}的系统用户数据，是否继续？`,
      type: 'warning',
      callback: (action: XMessageBoxAction) => {
        action === 'confirm' && this.employeeService.del(row.id).subscribe((x )=>{
          if (x.status == 0 && x.data == 1) {
            this.getTableData();
            this.xMessageService.success('删除成功');
          }
        });
      }
    });
  }

  getValidStatus() {
    return this.form?.formGroup?.status == "VALID"
  }

  confirm() {
    if(this.getValidStatus()) {
      this.employeeService.save(this.form.formGroup.value).subscribe((x) => {
        if(x.status == 0) {
          this.getTableData();
          this.xMessageService.success("新增系统用户成功！");
        } else {
          this.xMessageService.error('新增系统用户失败！请联系老板！');
        }
      });
    } else {
      this.xMessageService.warning('新增失败，请检查填写信息是否符合！');
    }
  }

  controls:XFormRow[] = [
    {
      title:'用户基本信息',
      controls: [
        { control: 'input', id: 'id', hidden: true},
        { control: 'input', id: 'accountId', label: '登陆用户名', required: true},
        { control: 'input', id: 'name', label: '姓名'},
        { control: 'input', id: 'phoneNumber',label: '电话号码', pattern: new RegExp(/^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/, 'i')},
        { control: 'input', id: 'loginPasswd', label: '密码', required: true }
      ]
    }
  ]

}
