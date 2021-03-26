import { Component, OnInit } from '@angular/core';
import { AjaxServiceService } from './../../services/ajax-service/ajax-service.service';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-agentdetails',
  templateUrl: './agentdetails.component.html',
  styleUrls: ['./agentdetails.component.scss']
})
export class AgentdetailsComponent implements OnInit {
  public agentDetailArr: Array<any> = [];
  constructor(
    private ajaxService : AjaxServiceService, 
    private localStorageService : LocalStorageService,
    private dataService : DataServiceService
  ) { }

  ngOnInit(): void {
    let agentId = this.localStorageService.getSelectedAgentId();
    if(agentId) {
      this.ajaxService.getAgentDetails(agentId).pipe().subscribe(res => {
        if(res && res.isSuccess) {
          this.dataService.agentDetailsData(res.agentdetails);
        }
      });
    }
    this.dataService.agentDetailsObs.subscribe(res => {
      this.agentDetailArr = res;
      console.log(this.agentDetailArr);
    })
  }

}
