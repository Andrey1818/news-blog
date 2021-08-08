import {Component} from '@angular/core';
import {AuthVisibilityService} from "../service/auth-visibility.service";

@Component({
  selector: 'app-auth-error',
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.scss']
})
export class AuthErrorComponent {

  constructor(
    public visibilityService: AuthVisibilityService
  ) {
  }

  close() {
    this.visibilityService.authError = false
  }
}
