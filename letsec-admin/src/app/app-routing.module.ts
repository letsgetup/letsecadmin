import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { AllagentsComponent } from './component/allagents/allagents.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'allagents', component: AllagentsComponent},
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
