import {Component, signal} from "@angular/core";
import TextInput from '../../../components/text-input/text-input';
import {form} from '@angular/forms/signals';
import {LoginForm} from '../../../../constants';
import {Button} from '../../../components';

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
  imports: [
    TextInput,
    Button
  ]
})

export class Login {
  loginModel = signal<LoginForm>({
    identifier: "",
    password: "",
  });
  loginForm = form(this.loginModel);
}
