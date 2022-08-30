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
class UserInfoService extends __BaseService {
  static readonly postUserDataPath = '/findEmployeeDetails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param Name Post User detail.
   * @return Buyback Post Result.
   */
  postUserDataResponse(Name: Employee): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Name;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @param Name Post User detail.
   * @return Buyback Post Result.
   */
  postUserData(Name: Employee): __Observable<{}> {
    return this.postUserDataResponse(Name).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module UserInfoService {
}

export { UserInfoService }
