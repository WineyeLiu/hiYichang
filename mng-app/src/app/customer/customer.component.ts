import { Component, OnInit } from '@angular/core';
import { XTableColumn } from '@ng-nest/ui/table';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  index = 1;
  size = 10;
  total = 0;
  data: any[] = [];
  columns: XTableColumn[] = [
    { id: 'id', label: 'ID', flex: 0.4, left: 0},
    { id: 'customerId', label: '用户ID', flex: 0.4},
    { id: 'orderDescription', label: '订单描述', flex: 0.5},
    { id: 'status', label: '状态', flex: 0.5 },
    { id: 'actions',label: '操作', flex: 0.5, action: true}
  ];


}
