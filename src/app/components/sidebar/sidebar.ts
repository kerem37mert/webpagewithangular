import { Component } from '@angular/core';
import { MENU, MenuItemType } from '../../../constants';
import { SidebarItem } from './sidebar-item/sidebar-item';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.html",
  styleUrls: ["./sidebar.scss"],
  imports: [
    SidebarItem
  ]
})

export class Sidebar {
  menu: MenuItemType[] = MENU;
}
