import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { AjaxServiceService } from './../../services/ajax-service/ajax-service.service';

@Component({
  selector: 'app-pendingapprovals',
  templateUrl: './pendingapprovals.component.html',
  styleUrls: ['./pendingapprovals.component.scss']
})
export class PendingapprovalsComponent implements OnInit {
  pendingAgentLs: any[] = [];
  constructor(
    private dataService : DataServiceService,
    private ajaxService : AjaxServiceService, 
    private localStorageService : LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ajaxService.getAllAgentDetails().pipe().subscribe(res => {
      if(res && res.isSuccess) {
        // console.log(res);
        this.dataService.allAgentsData(res.agentdetails);
      }
    });
    this.dataService.allAgentsObs.subscribe(itm => {
      console.log(itm);
      let pendingLs = itm.filter((item:any) => item.status === 4);
      this.dataService.pendingAgentData(pendingLs);
    });
    this.dataService.pendingAgentObs.subscribe(pendingList => {
      console.log("pendingList ", pendingList);
      this.pendingAgentLs = pendingList;
    });
  }

  agentDetailsRoute(item: any) {
    this.localStorageService.setSelectedAgentId(item.agentid);
    this.router.navigate(['home/agentdetails']);
  }

  tableHeadingClick() {
    this.pendingAgentLs.reverse();
  }

}
