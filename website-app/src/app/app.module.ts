import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

// nest-ui module
import { XLayoutModule } from '@ng-nest/ui/layout';
import { XButtonModule } from '@ng-nest/ui/button';
import { XInputModule } from '@ng-nest/ui/input';

// components
import { AppComponent } from './app.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryResultComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    XLayoutModule,
    XButtonModule,
    XInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
