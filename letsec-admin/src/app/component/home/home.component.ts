import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AjaxServiceService } from './../../services/ajax-service/ajax-service.service';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pendingStatusAgents: any;
  totalAgents: any;

  ngAfterViewInit() {
  }
  constructor(
    private ajaxService : AjaxServiceService, 
    private dataService : DataServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.ajaxService.getAllAgentDetails().pipe().subscribe(res => {
      if(res && res.isSuccess) {
        // console.log(res);
        let temp = res.agentdetails;
        this.totalAgents = temp.length;
        let filterTemp = temp.filter((_item:any) => _item.status !== 2 && _item.status !== 3);
        this.pendingStatusAgents = filterTemp.length;
        // console.log(filterTemp);
      }
    });
  }

  routeToDetails() {
    this.router.navigate(['home/allagents']);
  }

}
