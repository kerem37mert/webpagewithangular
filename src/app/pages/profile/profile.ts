import {Component, inject} from "@angular/core";
import {Button} from '../../components';
import {AuthService} from '../../services/auth';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"],
  imports: [
    Button
  ]
})

export class Profile {
  private readonly authService = inject(AuthService);

  handleLogout() {
    this.authService.logout();
  }
}
