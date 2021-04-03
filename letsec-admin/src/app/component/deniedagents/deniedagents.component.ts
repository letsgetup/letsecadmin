import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deniedagents',
  templateUrl: './deniedagents.component.html',
  styleUrls: ['./deniedagents.component.scss']
})
export class DeniedagentsComponent implements OnInit {
  deniedAgentList: any[] = [];
  constructor(
    private dataService : DataServiceService,
    private localStorageService : LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.deniedAgentObs.subscribe(deiedList => {
      console.log("deiedList ", deiedList);
      this.deniedAgentList = deiedList; 
    });
  }

  agentDetailsRoute(item: any) {
    this.localStorageService.setSelectedAgentId(item.agentid);
    this.router.navigate(['home/agentdetails']);
  }

  tableHeadingClick() {
    this.deniedAgentList.reverse();
  }

}
