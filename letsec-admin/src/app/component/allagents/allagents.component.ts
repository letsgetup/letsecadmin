import { Component, OnInit } from '@angular/core';
import {AjaxServiceService} from './../../services/ajax-service/ajax-service.service';
import { DataServiceService } from './../../services/data-service/data-service.service';
@Component({
  selector: 'app-allagents',
  templateUrl: './allagents.component.html',
  styleUrls: ['./allagents.component.scss']
})
export class AllagentsComponent implements OnInit {
  allAgentList: any[] = [];
  constructor(
    private ajaxService : AjaxServiceService, 
    private dataService : DataServiceService
  ) {
    this.allAgentList = [];
  }

  ngOnInit(): void {
    this.ajaxService.getAllAgentDetails().pipe().subscribe(res => {
      if(res && res.isSuccess) {
        // console.log(res);
        this.dataService.allAgentsData(res.agentdetails);
      }
    });
    this.dataService.allAgentsObs.subscribe(itm => {
      // console.log(itm);
      this.allAgentList = itm;
    });
    // console.log(this.allAgentList);
  }

  agentApprovalDenyClk(agentObj: any, val: Number) {
    // console.log(agentObj["status"]);
    agentObj["status"] = val;
    this.ajaxService.updateAgentDetails(agentObj).pipe().subscribe(res => {
      if(res && res.isSuccess) {
        console.log(res);
      }
    });
    console.log(agentObj);
  };

}
