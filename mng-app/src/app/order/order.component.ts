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

  index = 1;
  size = 10;
  total = 0;
  data: Order[] = [];
  columns: XTableColumn[] = [
    { id: 'index', label: '序号', flex: 0.5, left: 0, type: 'index' },
    { id: 'name', label: '用户', flex: 1.5, sort: true },
    { id: 'position', label: '职位', flex: 0.5, sort: true },
    { id: 'email', label: '邮箱', flex: 1 },
    { id: 'phone', label: '电话', flex: 1 },
    { id: 'organization', label: '组织机构', flex: 1, sort: true }
  ];

  getData():void {
    this.orderService.getOrderPageData(this.index, this.size).subscribe( x => {
        console.log(x.data)
      }
    )
  }

  indexChange(index: number) {
    this.index = index;
    this.getData();
  }

  sortChange(sort: ) {
    this.query.sort = sort;
    this.getData();
  }
}

}
