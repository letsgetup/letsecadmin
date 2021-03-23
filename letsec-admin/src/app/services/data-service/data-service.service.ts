import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  // Login data service
	private allAgents = new BehaviorSubject([]);
	allAgentsObs = this.allAgents.asObservable();

  // Login data
	allAgentsData(allAgentsDataItms: any) {
		this.allAgents.next(allAgentsDataItms);
	}
	allAgentsDataDataChange() {
		return this.allAgents;
	}


}
