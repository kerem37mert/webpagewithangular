import {Component, inject, signal} from "@angular/core";
import TextInput from '../../../components/text-input/text-input';
import {form} from '@angular/forms/signals';
import {LoginForm} from '../../../types';
import {Button} from '../../../components';
import {AuthService} from '../../../services/auth';
import {finalize} from 'rxjs';
import {RouterLink} from '@angular/router';
import {LINKS} from '../../../constants';

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
  imports: [
    TextInput,
    Button,
    RouterLink
  ]
})

export class Login {
  private authService = inject(AuthService);

  loginModel = signal<LoginForm>({
    identifier: "",
    password: "",
  });
  loginForm = form(this.loginModel);

  isLoading = signal(false);
  registerLink = ['/', LINKS.auth, LINKS.register];

  onSubmit(): void {
    const { identifier, password } = this.loginModel();
    this.isLoading.set(true);

    this.authService.login({
      identifier,
      password,
    }).pipe(
      finalize(() => this.isLoading.set(false)),
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log("ere",error);
      }
    })
  }
}
