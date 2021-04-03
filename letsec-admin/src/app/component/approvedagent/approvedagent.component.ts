import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvedagent',
  templateUrl: './approvedagent.component.html',
  styleUrls: ['./approvedagent.component.scss']
})
export class ApprovedagentComponent implements OnInit {
  approvedAgentList: any[] = [];
  constructor(
    private dataService : DataServiceService,
    private localStorageService : LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.approvedAgentObs.subscribe(approvedList => {
      console.log("approvedList ", approvedList);
      this.approvedAgentList = approvedList;
    });
  }

  agentDetailsRoute(item: any) {
    this.localStorageService.setSelectedAgentId(item.agentid);
    this.router.navigate(['home/agentdetails']);
  }

  tableHeadingClick() {
    this.approvedAgentList.reverse();
  }

}
