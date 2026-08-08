import { Component } from '@angular/core';
import {DraggableNote, Modal, EditNote} from '../../components';
import { Button } from '../../components';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote, Button, Modal, EditNote],
})

export class Home {
  title = 'Sticky Notlarım';
  isModalOpen = false;

  handleNewNote(): void {
    this.isModalOpen = true;
  }
}
