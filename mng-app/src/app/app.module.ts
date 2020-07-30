import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { XButtonModule } from '@ng-nest/ui/button';
import { XDialogModule } from '@ng-nest/ui/dialog';
import { XFormModule } from '@ng-nest/ui/form';
import { XPopconfirmModule } from '@ng-nest/ui/popconfirm';

import { XMessageBoxService} from '@ng-nest/ui/message-box';
import { XMessageService } from '@ng-nest/ui/message';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    XContainerModule,
    XAvatarModule,
    XMenuModule,
    XTableModule,
    XLinkModule,
    XButtonModule,
    XDialogModule,
    XFormModule,
    XPopconfirmModule
  ],
  providers: [
    XMessageBoxService,
    XMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
