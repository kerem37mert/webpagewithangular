import {Component, signal, model} from "@angular/core";
import { form, FormField } from '@angular/forms/signals';
import {Modal} from '../../../components';
import {Button} from '../../../components';
import {COLORS, ColorType, EditNoteForm} from '../../../../constants';
import {DragScrollDirective} from '../../../directives';

interface NoteType {
  title: string;
  content: string;
  color: string;
}

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.html",
  styleUrls: ["./edit-note.scss"],
  imports: [
    FormField,
    Modal,
    Button,
    DragScrollDirective,
  ]
})

export class EditNote {
  isModalOpen = model<boolean>(false)
  note = signal<NoteType>({
    title: "",
    content: "",
    color: "#fff",
  });
  editNoteModel = signal<EditNoteForm>({
    title: "",
    content: "",
  });
  isColorPanelOpen = false;
  colors: ColorType[] = COLORS;

  editNoteForm = form(this.editNoteModel);

  onClose(): void {
    this.isModalOpen.set(false);
  }

  onSubmit(): void {
    const formData = this.editNoteModel();
    console.log(formData);
  }

  toggleColorPanel(): void {
    this.isColorPanelOpen = !this.isColorPanelOpen;
  }

  setColor(color: string): void {
    this.note.set({...this.note(), color});
  }
}
