import {Component, inject, signal} from "@angular/core";
import TextInput from '../../../components/text-input/text-input';
import {form} from '@angular/forms/signals';
import {LoginForm} from '../../../types';
import {Button} from '../../../components';
import {AuthService} from '../../../services/auth';

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
  private authService = inject(AuthService);

  loginModel = signal<LoginForm>({
    identifier: "",
    password: "",
  });
  loginForm = form(this.loginModel);

  onSubmit(): void {
    const { identifier, password } = this.loginModel();

    this.authService.login({
      identifier,
      password,
    }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
