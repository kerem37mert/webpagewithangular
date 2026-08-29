import { Component, input } from '@angular/core';
import {MENU, MenuItemType} from '../../../constants';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.html',
  styleUrls: ['./sidebar-item.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    CdkDrag,
    CdkDropList,
  ]
})

export class SidebarItem {
  item = input.required<MenuItemType>();
  level = input<number>(0);
  expanded: boolean = false;
  isDraggable: boolean = true;

  hasChildren(): boolean {
    return !!this.item().children?.length;
  }

  toggle(): void {
    if (this.hasChildren()) {
      this.expanded = !this.expanded;
    }
  }

  dropChild(event: CdkDragDrop<MenuItemType[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
    localStorage.setItem("sidebar-menu", JSON.stringify(MENU));
  }
}
