import {Component, effect, inject, signal} from '@angular/core';
import {DraggableNote} from '../../components';
import { Button } from '../../components';
import {EditNote} from './edit-note/edit-note';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {NoteService} from '../../services/note';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote, Button, EditNote, CdkDropList],
})

export class Home {
  protected readonly noteService = inject(NoteService);

  title = 'Sticky Notlarım';
  isModalOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.noteService.getNoteList().subscribe({
        next: data => {
          console.log(data);
        }
      })
    });
  }

  handleNewNote(): void {
    this.isModalOpen.set(true);
  }

  handleOpenNote(): void {
    this.isModalOpen.set(true);
  }

  notes = [1,2,3,4,5,6,7,8,9];

  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }
}
