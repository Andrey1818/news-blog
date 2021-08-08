import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthValidator} from "../../../shared/validators/auth.validator";
import {User} from "../../../shared/interfeces/app.interfeces";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {AuthVisibilityService} from "../service/auth-visibility.service";

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit {
  form: FormGroup
  submitted = false

  constructor(
    public authService: AuthService,
    private route: Router,
    public visibilityService: AuthVisibilityService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        AuthValidator.noSpaces])
    })
  }

  submit() {
    if (this.form.valid) {
      const user: User = {
        email: this.form.value.email,
        password: this.form.value.password,
      }

      this.submitted = true;

      this.authService.login(user)
        .subscribe(() => {
          this.submitted = false
          this.visibilityService.errorMessageOnHome = ''
          this.route.navigate(['/admin', 'main'])
        }, () => {
          return
        })
    }
  }

  close() {
    this.visibilityService.errorMessageOnHome = ''
    this.route.navigate(['/'])
  }
}
