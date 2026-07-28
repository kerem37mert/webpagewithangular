import { Component } from '@angular/core';
import { MENU, MenuItemType } from '../../../constants';
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

export class Sidebar {
  menu: MenuItemType[] = MENU;

  drop(event: CdkDragDrop<MenuItemType[]>) {
    moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
  }
}
