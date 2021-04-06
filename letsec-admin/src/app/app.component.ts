import { Component, OnDestroy, OnInit } from '@angular/core';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'letsec-admin';
  spinnerStyle = Spinkit;

  constructor(spinVisible: SpinnerVisibilityService){
    //spinVisible.show();
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

}
