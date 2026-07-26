import { Component } from '@angular/core';
import {Header} from '../header/header';
import {Sidebar} from '../sidebar/sidebar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.html",
  styleUrls: ["./main-layout.scss"],
  imports: [
    Header,
    Sidebar,
    RouterOutlet
  ]
})

export class MainLayout {

}
