/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Calculation } from '../../models/calculation';
import { CalculationRequestCurrent } from '../../models/calculation-request-current';

export interface ApiCalculationCurrentIncrementPost$Params {
      body?: CalculationRequestCurrent
}

export function apiCalculationCurrentIncrementPost(http: HttpClient, rootUrl: string, params?: ApiCalculationCurrentIncrementPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Calculation>> {
  const rb = new RequestBuilder(rootUrl, apiCalculationCurrentIncrementPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Calculation>;
    })
  );
}

apiCalculationCurrentIncrementPost.PATH = '/api/calculation/current/increment';
