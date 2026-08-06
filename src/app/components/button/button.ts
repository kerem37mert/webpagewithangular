import {Component, input} from "@angular/core";
import {RouterLink} from '@angular/router';

type btnType = "link" | "button";
type btnVariant = "primary" | "secondary";
type btnSize = "small" | "medium" | "large";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.scss"],
  imports: [
    RouterLink
  ]
})

export class Button {
  type = input.required<btnType>();
  text = input<string | number>();
  link = input<string>();
  variant = input<btnVariant>("primary");
  size = input<btnSize>("medium");
}
