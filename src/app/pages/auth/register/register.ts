import {Component, signal} from "@angular/core";
import {RegisterForm} from '../../../../constants';
import {form} from '@angular/forms/signals';
import TextInput from '../../../components/text-input/text-input';
import {Button} from '../../../components';

@Component({
  selector: "app-register",
  templateUrl: "./register.html",
  styleUrls: ["./register.scss"],
  imports: [
    TextInput,
    Button
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
