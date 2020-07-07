import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  phone:string = '';

  resultData:string = '' 

  query():void {
    if (this.phone) {
      this.resultData = this.phone;
    }
  }

}
