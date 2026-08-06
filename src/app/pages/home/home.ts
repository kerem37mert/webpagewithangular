import { Component } from '@angular/core';
import { DraggableNote } from '../../components';
import { Button } from '../../components';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote, Button],
})

export class Home {
  title = 'Home';
}
