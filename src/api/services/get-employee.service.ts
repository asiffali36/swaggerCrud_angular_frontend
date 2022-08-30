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
   * Returns a single Employee
   * @return successful operation
   */
  getEmployeeRecord(): __Observable<Array<Employee>> {
    return this.getEmployeeRecordResponse().pipe(
      __map(_r => _r.body as Array<Employee>)
    );
  }
}

module GetEmployeeService {
}

export { GetEmployeeService }
