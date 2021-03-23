import { Component, OnInit } from '@angular/core';
import {AjaxServiceService} from './../../services/ajax-service/ajax-service.service';
@Component({
  selector: 'app-allagents',
  templateUrl: './allagents.component.html',
  styleUrls: ['./allagents.component.scss']
})
export class AllagentsComponent implements OnInit {

  constructor(private ajaxService : AjaxServiceService) { }

  ngOnInit(): void {
    console.log("asd")
    this.ajaxService.getAllAgentDetails('asd').pipe().subscribe(res => {
      console.log(res);
    })
  }

}
