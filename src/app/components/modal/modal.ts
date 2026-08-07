import {Component, input} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.html",
  styleUrls: ["./modal.scss"],
})

export class Modal {
  isOpen = input<boolean>(false);
}
