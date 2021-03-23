import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, subscribeOn } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscriber, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AjaxServiceService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public getAllAgentDetails(): Observable<any> {
    return this.http.get<any>(`${environment.backOfcUrl}/Agent/getagentdetails/ALLAGENTS`).pipe(
      map((res) => {
        // console.log(res);
        return res;
      }));
    };
    public updateAgentDetails(agentDetail: any) : Observable<any> {
      return this.http.put<any>(`${environment.backOfcUrl}/Agent/updateagentdetails`, agentDetail).pipe(
        map(res => {
        // console.log(res);
        return res;
      })
    )
  }
}
