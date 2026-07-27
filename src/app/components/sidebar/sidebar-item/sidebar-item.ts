import { Component, input } from '@angular/core';
import { MenuItemType } from '../../../../constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.html',
  styleUrls: ['./sidebar-item.scss'],
  imports: [
    RouterLink
  ]
})

export class SidebarItem {
  item = input.required<MenuItemType>();
  expanded = false;

  hasChildren(): boolean {
    return !!this.item().children?.length;
  }

  toggle(): void {
    if (this.hasChildren()) {
      this.expanded = !this.expanded;
    }
  }
}
