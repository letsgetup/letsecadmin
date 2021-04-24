import { Component, OnInit } from '@angular/core';
import { AjaxServiceService } from './../../services/ajax-service/ajax-service.service';
import { DataServiceService } from './../../services/data-service/data-service.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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
    private dataService : DataServiceService,
    public dialog: MatDialog
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

  denyHandleClick() {
    console.log("asd");
    const dialogRef = this.dialog.open(DenyDialogComponent, { disableClose: true, maxWidth: 400, minWidth: 400 });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'deny-dialog',
  template: `
    <h2 mat-dialog-title>Reason for Denying</h2>
    <div class="form-group">
      <label for="Reason" class="font-weight-bold required-field">Reason</label>
      <input required type="text" formControlName="Email" class="form-control"/>
    </div>
    <footer class="dialog-footer">
    <button class="done-btn ml-3" (click)="denyDialogHandle()">
        <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>Done
    </button>
      <button class="cancel-btn" (click)="calcelDialogHandle()">
          <i class="fa fa-ban mr-2" aria-hidden="true"></i>Cancel
      </button>
    </footer>
  `,
  styleUrls: ['./agentdetails.component.scss']
})
export class DenyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DenyDialogComponent>
  ) {}

  calcelDialogHandle(): void {
    this.dialogRef.close(); 
  }
  
  denyDialogHandle(): void {
    this.dialogRef.close();

  }

}
