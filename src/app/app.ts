import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components';
import {SidebarComponent} from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
