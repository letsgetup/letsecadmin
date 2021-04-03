import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';

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
    // {name: 'Dashboard', linkTo: '/home/dashboard', icon: 'fa fa-tachometer', tree: []},
    {name: 'Agent managemant', linkTo: '/home/allagents', icon: 'fa fa-list-alt', tree: [{
      name: 'Approved agents', linkTo: '/home/approvedagents', icon: 'fa fa-check-square-o'}, { 
      name: 'Denied Agents', linkTo: '/home/deniedagents', icon: 'fa fa-times'}]},
    {name: 'Settings', linkTo: '/home', icon: 'fa fa-cog', tree: []},
    {name: 'Logout', linkTo: '/login', icon: 'fa fa-sign-out', tree: []}
  ];

  constructor(
    private router: Router, 
    private localStorageService : LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.adminName = "Jane";
  }

  navigatedToPage(e:any, menu: any) {
    this.router.navigate([menu.linkTo]);
    if(menu.name === 'Logout') {
      this.localStorageService.clearLocalStorage();
    }
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
