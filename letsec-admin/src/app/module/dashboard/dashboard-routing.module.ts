import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../component/layout/layout.component';
import { AllagentsComponent } from '../../component/allagents/allagents.component';
import { HomeComponent } from '../../component/home/home.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
