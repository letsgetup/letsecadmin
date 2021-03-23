import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from '../../component/layout/layout.component';
import { SidenavComponent } from '../../component/sidenav/sidenav.component';
import { HomeComponent } from '../../component/home/home.component';
import { HeaderComponent } from '../../component/header/header.component';
import { AllagentsComponent } from '../../component/allagents/allagents.component';


@NgModule({
  declarations: [
    LayoutComponent, 
    SidenavComponent, 
    HomeComponent, 
    HeaderComponent,
    AllagentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
