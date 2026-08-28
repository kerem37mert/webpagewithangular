import {Component, signal} from "@angular/core";
import {RegisterForm} from '../../../../constants';
import {form} from '@angular/forms/signals';
import TextInput from '../../../components/text-input/text-input';

@Component({
  selector: "app-register",
  templateUrl: "./register.html",
  styleUrls: ["./register.scss"],
  imports: [
    TextInput
  ]
})

export class Register {
  registerModel = signal<RegisterForm>({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  })

  registerForm = form(this.registerModel);
}
