import {Component, input} from "@angular/core";
import {RouterLink} from '@angular/router';

type btnType = "link" | "button";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.scss"],
  imports: [
    RouterLink
  ]
})

export class Button {
  text = input<string | number>();
  type = input.required<btnType>();
  link = input<string>();
}
