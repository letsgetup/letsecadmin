import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from '../../component/layout/layout.component';
import { SidenavComponent } from '../../component/sidenav/sidenav.component';
import { HomeComponent } from '../../component/home/home.component';
import { HeaderComponent } from '../../component/header/header.component';
import { AllagentsComponent } from '../../component/allagents/allagents.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

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
    DashboardRoutingModule,
    MatTreeModule,
    MatExpansionModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
