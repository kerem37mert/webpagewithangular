import {Component, signal} from "@angular/core";
import {RegisterForm} from '../../../types';
import {email, form, required} from '@angular/forms/signals';
import TextInput from '../../../components/text-input/text-input';
import {Button} from '../../../components';
import {LINKS} from '../../../constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.html",
  styleUrls: ["./register.scss"],
  imports: [
    TextInput,
    Button,
    RouterLink
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

  registerForm = form(this.registerModel, (schemaPath) => {
    required(schemaPath.email, {message: "This field is required"});
    email(schemaPath.email, {message: 'Enter a valid email address'});

    required(schemaPath.username, {message: "This field is required"});

    required(schemaPath.password, {message: "This field is required"});
  });

  loginLink = ['/', LINKS.auth, LINKS.login];
}
