import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const dashboardcomp = () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule);

const routes: Routes = [
  { path: 'home', loadChildren: dashboardcomp},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
