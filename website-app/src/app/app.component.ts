import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  phone:string = '';

  resultData 

  query():void {
    window.alert(this.phone);
  }
}
