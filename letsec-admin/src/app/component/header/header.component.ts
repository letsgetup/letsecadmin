import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleDropMenu: Boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  };

  dropDownToggle() {
    console.log("asdn");
    this.toggleDropMenu = !this.toggleDropMenu;
  }

}
