import {Component, inject} from "@angular/core";
import {ToastService} from '../../services/toast';
import {ToastMessage} from './toast-message/toast-message';

@Component({
  selector: "app-toast-container",
  templateUrl: "./toast-container.html",
  styleUrls: ["./toast-container.scss"],
  imports: [
    ToastMessage
  ]
})

export class ToastContainer {
  protected readonly toastService = inject(ToastService);

}
