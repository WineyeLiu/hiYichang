import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Order } from './entity/order'
import { ProcedureStep } from './entity/step';
import { Observable, from } from 'rxjs';
import { CommonResponse } from './entity/response'
import { Page } from './entity/page'
import { baseUrl} from './config'

import { XRepositoryAbstract, XQuery, XResultList, XGroupItem, XFilter, chunk, groupBy, XSort, XId } from '@ng-nest/ui/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    private http: HttpClient
  ) { }
  
  getOrderPageData(
    index: number, 
    size: number
    ): Observable<CommonResponse<Page<Order>>> {

    let headers = new HttpHeaders();
    headers.append("Authorization", "s")
    headers.append("Access-Control-Allow-Origin", "*");

    let params = new HttpParams()
      .set('index', ''+index)
      .set('size', ''+size);

    return this.http.get<CommonResponse<Page<Order>>>(baseUrl + '/order/page', {params, headers});
  }

  updateOrder(order: Order):Observable<CommonResponse<Number>> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.patch<CommonResponse<Number>>(baseUrl + '/order', 
    order, {headers: headers});
  }

  addOrder(order: Order):Observable<CommonResponse<Number>> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<CommonResponse<Number>>(baseUrl + '/order', order,
      {headers: headers}
    );
  }

  delOrderById(id:number): Observable<CommonResponse<Number>> {
    let headers = new HttpHeaders();
    return this.http.delete<CommonResponse<Number>>(baseUrl + '/order/'+id, {
      headers: headers
    });
  }

  getStepsByOrderId(id: number): Observable<CommonResponse<Array<ProcedureStep>>> {
    let headers = new HttpHeaders();
    return this.http.get<CommonResponse<Array<ProcedureStep>>>(baseUrl + '/step/oid_' + id, {headers});
  }
}
