import {Component, OnInit} from '@angular/core';
import { MENU, MenuItemType } from '../../constants';
import { SidebarItem } from './sidebar-item/sidebar-item';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.html",
  styleUrls: ["./sidebar.scss"],
  imports: [
    SidebarItem,
    CdkDropList
  ]
})

export class Sidebar implements OnInit{
  menu: MenuItemType[] = MENU;

  ngOnInit() {
    const menu = localStorage.getItem("sidebar-menu");
    if (menu) {
      this.menu = JSON.parse(menu);
    }
  }

  drop(event: CdkDragDrop<MenuItemType[]>) {
    moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    localStorage.setItem("sidebar-menu", JSON.stringify(this.menu));
  }
}
