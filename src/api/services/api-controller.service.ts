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
class ApiControllerService extends __BaseService {
  static readonly updateEmployeeRecordsPath = '/update-employeedetails';
  static readonly addEmployeeRecordPath = '/update-employeedetails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * putRecord
   * @param params The `ApiControllerService.UpdateEmployeeRecordsParams` containing the following parameters:
   *
   * - `modelClass`: modelClass
   *
   * - `id`: id
   *
   * @return Record updated
   */
  updateEmployeeRecordsResponse(params: ApiControllerService.UpdateEmployeeRecordsParams): __Observable<__StrictHttpResponse<Employee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.modelClass;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/update-employeedetails`,
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
   * putRecord
   * @param params The `ApiControllerService.UpdateEmployeeRecordsParams` containing the following parameters:
   *
   * - `modelClass`: modelClass
   *
   * - `id`: id
   *
   * @return Record updated
   */
  updateEmployeeRecords(params: ApiControllerService.UpdateEmployeeRecordsParams): __Observable<Employee> {
    return this.updateEmployeeRecordsResponse(params).pipe(
      __map(_r => _r.body as Employee)
    );
  }

  /**
   * addEmployee
   * @param employee employee
   * @return OK
   */
  addEmployeeRecordResponse(employee: Employee): __Observable<__StrictHttpResponse<Employee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = employee;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/update-employeedetails`,
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
   * addEmployee
   * @param employee employee
   * @return OK
   */
  addEmployeeRecord(employee: Employee): __Observable<Employee> {
    return this.addEmployeeRecordResponse(employee).pipe(
      __map(_r => _r.body as Employee)
    );
  }
}

module ApiControllerService {

  /**
   * Parameters for updateEmployeeRecords
   */
  export interface UpdateEmployeeRecordsParams {

    /**
     * modelClass
     */
    modelClass: Employee;

    /**
     * id
     */
    id: number;
  }
}

export { ApiControllerService }
