import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { SystemComponent } from './system/system.component';

// ng nest-ui module 
import { XContainerModule } from '@ng-nest/ui/container';
import { XAvatarModule } from '@ng-nest/ui/avatar';
import { XMenuModule } from '@ng-nest/ui/menu';
import { XTableModule } from '@ng-nest/ui/table';
import { XLinkModule } from '@ng-nest/ui/link';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    XContainerModule,
    XAvatarModule,
    XMenuModule,
    XTableModule,
    XLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
