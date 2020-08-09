import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from './entity/cusotmer';
import { Observable } from 'rxjs';
import { CommonResponse } from './entity/response';
import { baseUrl } from './config';
import { Page } from './entity/page';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  save(customer: Customer): Observable<CommonResponse<Number>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(baseUrl + '/customer',customer, {headers});
  }

  del(id: number): Observable<CommonResponse<Number>> {
    let headers:HttpHeaders = new HttpHeaders();
    return this.http.delete<CommonResponse<Number>>(baseUrl + '/customer/' + id, {headers});
  }

  update(customer: Customer): Observable<CommonResponse<Number>> {
    let headers:HttpHeaders = new HttpHeaders();
    return this.http.patch(baseUrl + '/customer', customer, {headers})
  }

  page(index: number, size: number): Observable<CommonResponse<Page<Customer>>> {
    let headers: HttpHeaders = new HttpHeaders();
    let params:HttpParams = new HttpParams()
      .set('index', ''+index)
      .set('size', ''+size);
    
    return this.http.get<CommonResponse<Page<Customer>>>(baseUrl + '/customer/page',{headers, params}); 
  }
}
