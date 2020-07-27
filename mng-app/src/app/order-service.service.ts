import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Order } from './entity/order'
import { Observable } from 'rxjs';
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

    let params = new HttpParams();
    params.append("index", ''+index);
    params.append("size", ''+size);

    return this.http.get<CommonResponse<Page<Order>>>(baseUrl + '/order/page', {
      headers: headers,
      params: params
    });
  }

  updateOrder(order: Order):Observable<CommonResponse<Number>> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.patch<CommonResponse<Number>>(baseUrl + '/order', 
    order, {headers: headers});
  }

  addOrder(order: Order):Observable<CommonResponse<Number>> {
    let h = new HttpHeaders();
    h.append("Content-Type", "application/json");
    return this.http.post<CommonResponse<Number>>(baseUrl + '/order', order,
      {headers: h}
    );
  }

  delOrderById(id:number): Observable<CommonResponse<Number>> {
    let headers = new HttpHeaders();
    return this.http.delete<CommonResponse<Number>>(baseUrl + '/order/'+id, {
      headers: headers
    });
  }
}
