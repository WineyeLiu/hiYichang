import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { SystemComponent } from './system/system.component';


const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'system', component: SystemComponent},
  {path: '', redirectTo: '/order', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
