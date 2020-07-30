import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router, public activated: ActivatedRoute) {

  }

  menu_data = [
    { id: 1, label: '订单管理', icon: 'fto-gift', router: 'order'},
    { id: 2, label: '客户管理', icon: 'fto-package', router: 'customer'},
    { id: 3, label: '系统管理', icon: 'fto-layers', router: 'system'}
  ];

  itemClick(menu: Menu) {
    console.log(menu);
    this.router.navigate([menu.router], {relativeTo: this.activated})
  }
}
export interface Menu {
  id?: string;
  pid?: string | null;
  label?: string;
  name?: string;
  enLabel?: string;
  router?: string;
  icon?: string;
  type?: string;
  order?: number;
  category?: string;
  [prop: string]: any;
}