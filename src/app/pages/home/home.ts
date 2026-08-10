import { Component } from '@angular/core';
import {DraggableNote} from '../../components';
import { Button } from '../../components';
import {EditNote} from './edit-note/edit-note';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote, Button, EditNote],
})

export class Home {
  title = 'Sticky Notlarım';
  isModalOpen = false;

  handleNewNote(): void {
    this.isModalOpen = true;
  }
}
