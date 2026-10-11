import {Component, input} from "@angular/core";
import {ToastType} from '../../../services/toast';

@Component({
  selector: "app-toast-message",
  templateUrl: "./toast-message.html",
  styleUrls: ["./toast-message.scss"]
})

export class ToastMessage {
  type = input.required<ToastType>();
  message = input<string>("");
  autoClose = input<boolean>(false);
  duration = input<number>(3000);
}
