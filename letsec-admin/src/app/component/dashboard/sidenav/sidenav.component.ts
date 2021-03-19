import { Component, OnInit } from '@angular/core';

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
  private menuOptions: Menulist[] = [
    {name: 'Home', linkTo: '/home', icon: ''},
    {name: 'Agent managemant', linkTo: '', icon: ''},
    {name: 'Settings', linkTo: '/settings', icon: ''},
    {name: 'Logout', linkTo: '/login', icon: ''}
  ];

  constructor() {}

  ngOnInit(): void {
    this.adminName = "Jane";
    console.log(this.menuOptions);
  }

}
