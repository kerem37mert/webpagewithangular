import {Component, signal} from "@angular/core";
import TextInput from '../../../components/text-input/text-input';
import {form} from '@angular/forms/signals';
import {LoginForm} from '../../../../constants';

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
  imports: [
    TextInput
  ]
})

export class Login {
  loginModel = signal<LoginForm>({
    identifier: "",
    password: "",
  });
  loginForm = form(this.loginModel);
}
