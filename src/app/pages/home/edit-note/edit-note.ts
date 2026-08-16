import {Component, signal, model} from "@angular/core";
import { form, FormField } from '@angular/forms/signals';
import {Modal} from '../../../components';
import {Button} from '../../../components';
import {EditNoteForm} from '../../../../constants';

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.html",
  styleUrls: ["./edit-note.scss"],
  imports: [
    FormField,
    Modal,
    Button,
  ]
})

export class EditNote {
  isModalOpen = model<boolean>(false);
  editNoteModel = signal<EditNoteForm>({
    title: "",
    content: "",
  });
  isColorPanelOpen = false;

  editNoteForm = form(this.editNoteModel);

  onClose(): void {
    this.isModalOpen.set(false);
  }

  onSubmit(): void {
    const formData = this.editNoteModel();
    console.log(formData);
  }

  toggleColorPanel() {
    this.isColorPanelOpen = !this.isColorPanelOpen;
  }
}
