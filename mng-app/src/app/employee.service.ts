import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from './entity/employee';
import { Observable } from 'rxjs';
import { CommonResponse } from './entity/response';
import { baseUrl } from './config';
import { Page } from './entity/page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  page(index: number, size: number): Observable<CommonResponse<Page<Employee>>> {
    let headers:HttpHeaders = new HttpHeaders();
    let params:HttpParams = new HttpParams()
      .set('index', ''+index)
      .set('size', ''+size);

    return this.http.get<CommonResponse<Page<Employee>>>(baseUrl + '/employee/page', {headers, params});
  }

  del(id:number): Observable<CommonResponse<Number>> {
    let headers:HttpHeaders = new HttpHeaders();
    return this.http.delete<CommonResponse<Number>>(baseUrl + '/employee/' + id, {headers});
  }

  save(employee: Employee): Observable<CommonResponse<Number>> {
    let headers:HttpHeaders = new HttpHeaders();
    return this.http.post<CommonResponse<Number>>(baseUrl + '/employee', employee, {headers});
  }

  patch(employee: Employee): Observable<CommonResponse<Number>> {
    let headers:HttpHeaders = new HttpHeaders();
    return this.http.patch<CommonResponse<Number>>(baseUrl + '/employee', employee, {headers});
  }

}
