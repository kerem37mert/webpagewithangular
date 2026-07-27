import { Component } from "@angular/core";
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-draggable-note",
  templateUrl: "./draggable-note.html",
  styleUrls: ["./draggable-note.scss"],
  imports: [CdkDrag]
})

export class DraggableNote {}
