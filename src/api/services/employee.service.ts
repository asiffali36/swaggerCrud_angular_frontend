/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Employee } from '../models/employee';

/**
 * Everything about your Employee
 */
@Injectable({
  providedIn: 'root',
})
class EmployeeService extends __BaseService {
  static readonly getEmployeeDetailsPath = '/findEmployeeDetails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * employee detail
   *
   * Returns a single Employee
   * @return successful operation
   */
  getEmployeeDetailsResponse(): __Observable<__StrictHttpResponse<Array<Employee>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/findEmployeeDetails`,
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
   * Returns a single Employee
   * @return successful operation
   */
  getEmployeeDetails(): __Observable<Array<Employee>> {
    return this.getEmployeeDetailsResponse().pipe(
      __map(_r => _r.body as Array<Employee>)
    );
  }
}

module EmployeeService {
}

export { EmployeeService }
