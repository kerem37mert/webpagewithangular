import {Component, inject, signal} from "@angular/core";
import TextInput from '../../../components/text-input/text-input';
import {form, required, submit} from '@angular/forms/signals';
import {LoginForm} from '../../../types';
import {Button} from '../../../components';
import {AuthService} from '../../../services/auth';
import {RouterLink} from '@angular/router';
import {LINKS} from '../../../constants';
import {firstValueFrom} from 'rxjs';

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
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.identifier, {message: "This field is required"});

    required(schemaPath.password, {message: "This field is required"});
  });

  isLoading = signal(false);
  registerLink = ['/', LINKS.auth, LINKS.register];

  async onSubmit() {
    await submit(this.loginForm, async (field) => {
      const { identifier, password } = field().value();
      this.isLoading.set(true);

      try {
        const response = await firstValueFrom(
          this.authService.login({ identifier, password })
        );
        console.log(response);
      } catch (error) {
        console.log("ere", error);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
}
