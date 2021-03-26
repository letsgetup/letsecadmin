import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Selected agent id
	setSelectedAgentId(agentId: any) {
		return localStorage.setItem('selected_agent_id', agentId);
	}
	getSelectedAgentId() {
		return localStorage.getItem('selected_agent_id');
	}
	removeSelectedAgentId() {
		return localStorage.removeItem('selected_agent_id');
	}
}
