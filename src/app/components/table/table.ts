import {Component, input} from "@angular/core";
import { TableColumn } from './tableTypes';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: "app-table",
  templateUrl: "./table.html",
  styleUrls: ["./table.scss"],
  imports: [
    CdkDropList,
    CdkDrag
  ]
})

export class Table<T extends { id: number | string }> {
  data = input.required<T[]>();
  columns = input.required<TableColumn<T>[]>();

  dropColumn(event: CdkDragDrop<TableColumn<T>[]>) {
    moveItemInArray(this.columns(), event.previousIndex, event.currentIndex);
  }
}
