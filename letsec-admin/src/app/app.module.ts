import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
// import { DashboardModule } from './module/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AgentdetailsComponent } from './component/agentdetails/agentdetails.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgHttpLoaderModule } from 'ng-http-loader';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
// import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApprovedagentComponent } from './component/approvedagent/approvedagent.component';
import { DeniedagentsComponent } from './component/deniedagents/deniedagents.component';
import { PendingapprovalsComponent } from './component/pendingapprovals/pendingapprovals.component';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgentdetailsComponent,
    ApprovedagentComponent,
    DeniedagentsComponent,
    PendingapprovalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    NgHttpLoaderModule.forRoot(),
    // NgxPaginationModule
    // MatTreeFlatDataSource,
    // MatTreeFlattener,
    // MatListModule
    // DashboardModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
