import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../component/layout/layout.component';
import { AllagentsComponent } from '../../component/allagents/allagents.component';
import { HomeComponent } from '../../component/home/home.component';
import { AgentdetailsComponent } from '../../component/agentdetails/agentdetails.component';
import { ApprovedagentComponent } from '../../component/approvedagent/approvedagent.component';
import { DeniedagentsComponent } from '../../component/deniedagents/deniedagents.component';
import { MailComponent } from 'src/app/component/mail/mail.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'dashboard', 
        component: HomeComponent
      },
      {
        path: 'allagents', 
        component: AllagentsComponent
      },
      {
        path: 'agentdetails',
        component: AgentdetailsComponent
      },
      {
        path: 'approvedagents',
        component: ApprovedagentComponent
      },
      {
        path: 'deniedagents',
        component: DeniedagentsComponent
      },
      {
        path: 'mail',
        component: MailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
