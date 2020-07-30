import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service'
import { Order } from '../entity/order';

import { XTableColumn } from '@ng-nest/ui/table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  auth = {};
  index = 1;
  size = 10;
  total = 0;
  data: Order[] = [];
  columns: XTableColumn[] = [
    { id: 'id', label: 'ID', flex: 0.4, left: 0, type: 'index' },
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

  delOrder(row: any) {
    console.log('del ' + row.id);
  }

  updateOrder(row: any) {
    console.log('update ' + row.id);
  }

  orderSteps(row: any) {
    console.log('steps of ' + row.id);
  }

}
