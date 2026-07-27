import { Component } from '@angular/core';
import { DraggableNote } from '../../components';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [DraggableNote],
})

export class Home {
  title = 'Home';
}
