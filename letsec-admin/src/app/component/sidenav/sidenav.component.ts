import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Menulist {
  name: string;
  linkTo: string;
  icon: string
};
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private adminName: any;
  public menuOptions: Menulist[] = [
    {name: 'Home', linkTo: '/home/dashboard', icon: 'fa fa-tachometer'},
    {name: 'Agent managemant', linkTo: '/home/allagents', icon: 'fa fa-list-alt'},
    {name: 'Approved agents', linkTo: '/settings', icon: 'fa fa-check-square-o'},
    {name: 'Denied Agents', linkTo: '/home', icon: 'fa fa-times'},
    {name: 'Blocked Agents', linkTo: '/home', icon: 'fa fa-ban'},
    {name: 'Settings', linkTo: '/home', icon: 'fa fa-cog'},
    {name: 'Logout', linkTo: '/login', icon: 'fa fa-sign-out'}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.adminName = "Jane";
  }

  navigatedToPage(menu: any) {
    this.router.navigate([menu.linkTo]);
  }

}
