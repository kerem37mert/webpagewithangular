import { Component } from '@angular/core';
import { MENU, MenuItemType } from '../../../constants';
import {SidebarItemComponent} from './sidebar-item/sidebar-item';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.html",
  styleUrls: ["./sidebar.scss"],
  imports: [
    SidebarItemComponent
  ]
})

export class Sidebar {
  menu: MenuItemType[] = MENU;
}
