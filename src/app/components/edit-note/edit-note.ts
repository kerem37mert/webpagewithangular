import {Component, model} from "@angular/core";
import {Modal} from '../modal/modal';

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.html",
  styleUrls: ["./edit-note.scss"],
  imports: [
    Modal
  ]
})

export class EditNote {
  isModalOpen = model<boolean>(false);
}
