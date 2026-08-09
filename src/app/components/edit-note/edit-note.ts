import {Component, model} from "@angular/core";
import {Modal} from '../modal/modal';
import {Button} from '../button/button';

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.html",
  styleUrls: ["./edit-note.scss"],
  imports: [
    Modal,
    Button
  ]
})

export class EditNote {
  isModalOpen = model<boolean>(false);

  onClose(): void {
    this.isModalOpen.set(false);
  }
}
