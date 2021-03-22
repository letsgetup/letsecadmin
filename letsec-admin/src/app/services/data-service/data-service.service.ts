import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  // Login data service
	private loginDetails = new BehaviorSubject([]);
	loginDetailsObs = this.loginDetails.asObservable();

  // Login data
	loginDetailsResp(loginDetailsRespItms: any) {
		this.loginDetails.next(loginDetailsRespItms);
	}
	loginDetailsRespDataChange() {
		return this.loginDetails;
	}

  
}
