import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

	// All Agent data service
	private allAgents = new BehaviorSubject([]);
	allAgentsObs = this.allAgents.asObservable();

	// All Agent data
	allAgentsData(allAgentsDataItms: any) {
		this.allAgents.next(allAgentsDataItms);
	}
	allAgentsDataDataChange() {
		return this.allAgents;
	}


	// Particular agent data service
	private agentDetails = new BehaviorSubject([]);
	agentDetailsObs = this.agentDetails.asObservable();

	// Particular agent data
	agentDetailsData(agentDetailsDataItms: any) {
		this.agentDetails.next(agentDetailsDataItms);
	}
	agentDetailsDataDataChange() {
		return this.agentDetails;
	}

	// Approved agent data service
	private approvedAgent = new BehaviorSubject([]);
	approvedAgentObs = this.approvedAgent.asObservable();

	// Approved agent data
	approvedAgentData(approvedAgentDataItms: any) {
		this.approvedAgent.next(approvedAgentDataItms);
	}
	approvedAgentDataDataChange() {
		return this.approvedAgent;
	}

	// Denied agent data service
	private deniedAgent = new BehaviorSubject([]);
	deniedAgentObs = this.deniedAgent.asObservable();

	// Denied agent data
	deniedAgentData(deniedAgentDataItms: any) {
		this.deniedAgent.next(deniedAgentDataItms);
	}
	deniedAgentDataDataChange() {
		return this.deniedAgent;
	}


}
