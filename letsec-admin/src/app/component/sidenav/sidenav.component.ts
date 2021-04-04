import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Menulist {
  name: string;
  linkTo: string;
  icon: string,
  tree: Array<any>;
};
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private adminName: any;
  selectedItem: any;
  openTreeView!: Boolean;
  public menuOptions: Menulist[] = [
    {name: 'Home', linkTo: '/home/dashboard', icon: 'fa fa-tachometer', tree: []},
   /*
    {name: 'Home', linkTo: '/home/dashboard', icon: 'fa fa-tachometer', tree: [{
      name: 'Leads', linkTo: '/home/dashboard', icon: 'fa fa-money'}, {
      name: 'Business', linkTo: '/home/dashboard', icon: 'fa fa-briefcase'}, {
      name: 'Content', linkTo: '/home/dashboard', icon: 'fa fa-briefcase'}]},
      */
      {name: 'Dashboard', linkTo: '/home/dashboard', icon: 'fa fa-tachometer', tree: []},
    {name: 'Agent managemant', linkTo: '/home/allagents', icon: 'fa fa-list-alt', tree: [{
      name: 'Approved agents', linkTo: '/settings', icon: 'fa fa-check-square-o'}, { 
      name: 'Denied Agents', linkTo: '/home/dashboard', icon: 'fa fa-times'}, {
      name: 'Blocked Agents', linkTo: '/home/dashboard', icon: 'fa fa-ban'
      }]},
    {name: 'Settings', linkTo: '/home', icon: 'fa fa-cog', tree: []},
    {name: 'Logout', linkTo: '/login', icon: 'fa fa-sign-out', tree: []}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.adminName = "Jane";
  }

  navigatedToPage(e:any, menu: any) {
    this.router.navigate([menu.linkTo]);
    this.selectedItem = menu;
  }

  openCollapse(e: any, tree: any) {
    console.log(e, tree);
    let a = this.menuOptions.filter(itm => itm.tree == tree);
    console.log(a);
    if(tree == a[0].tree) {
      console.log(a);
      this.openTreeView = !this.openTreeView;
    }
  }

}
