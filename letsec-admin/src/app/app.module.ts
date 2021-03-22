import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './component/dashboard/sidenav/sidenav.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './component/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AllagentsComponent } from './component/allagents/allagents.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    AllagentsComponent
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
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
