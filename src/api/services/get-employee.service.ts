/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root',
})
class GetEmployeeService extends __BaseService {
  static readonly getEmployeeRecordPath = '/employee-details';
  static readonly getEmployeeRecordByIdPath = '/employee-details-byid';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * employee detail
   *
   * Returns All Employee
   * @return successful operation
   */
  getEmployeeRecordResponse(): __Observable<__StrictHttpResponse<Array<Employee>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/employee-details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Employee>>;
      })
    );
  }
  /**
   * employee detail
   *
   * Returns All Employee
   * @return successful operation
   */
  getEmployeeRecord(): __Observable<Array<Employee>> {
    return this.getEmployeeRecordResponse().pipe(
      __map(_r => _r.body as Array<Employee>)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getEmployeeRecordByIdResponse(id: number): __Observable<__StrictHttpResponse<Employee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/employee-details-byid`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Employee>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getEmployeeRecordById(id: number): __Observable<Employee> {
    return this.getEmployeeRecordByIdResponse(id).pipe(
      __map(_r => _r.body as Employee)
    );
  }
}

module GetEmployeeService {
}

export { GetEmployeeService }
