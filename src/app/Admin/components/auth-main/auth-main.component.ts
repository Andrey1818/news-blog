import {Component, OnInit} from '@angular/core';
import {AuthEnter, AuthEnterError, AuthLeave} from "../../../Shared/animations/animate.consts";
import {AuthService} from "../../shared/services/auth.service";
import {AuthVisibilityService} from "./service/auth-visibility.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-background',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss'],
  animations: [AuthEnter, AuthLeave, AuthEnterError]
})
export class AuthMainComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public visibilityService: AuthVisibilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin', 'main'])
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params['time'] || params['authFailed']) {
        this.visibilityService.errorMessageOnHome = 'Время сессии истекло. Авторизируйтесь.'
      }
    })
  }

}
