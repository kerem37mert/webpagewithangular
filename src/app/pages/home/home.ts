import {Component, inject} from '@angular/core';
import {DraggableNote} from '../../components';
import { Button } from '../../components';
import {EditNote} from './edit-note/edit-note';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote, Button, EditNote, CdkDropList],
})

export class Home {
  protected readonly authService = inject(AuthService);

  title = 'Sticky Notlarım';
  isModalOpen = false;

  handleNewNote(): void {
    this.isModalOpen = true;
  }

  handleOpenNote(): void {
    this.isModalOpen = true;
  }

  notes = [1,2,3,4,5,6,7,8,9];

  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }
}
