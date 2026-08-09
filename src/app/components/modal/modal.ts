import {Component, input, model} from "@angular/core";

type modalSize = "small" | "medium" | "large";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.html",
  styleUrls: ["./modal.scss"],
})

export class Modal {
  isOpen = model<boolean>(false);
  size = input<modalSize>("medium");
  closeOnOutsideClick = input<boolean>(true);
  title = input<string>();
  showCloseButton = input<boolean>(true);

  onClose = (): void => {
    this.isOpen.set(false);
  }
}
