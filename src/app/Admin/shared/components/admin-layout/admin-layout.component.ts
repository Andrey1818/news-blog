import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {AuthVisibilityService} from "../../../components/auth-main/service/auth-visibility.service";
import {DataService} from "../../../../Shared/services/data.service";
import {AlertDeleteVisibilityService} from "../../../components/main-admin-page/alert-delete-visibility.service";
import {AnimateSearchService} from "../../../../Shared/services/animate-search.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {

  constructor(
    private route: Router,
    public authService: AuthService,
    private authVisibilityService: AuthVisibilityService,
    private data: DataService,
    public alertVisibilityService: AlertDeleteVisibilityService,
    public animateService: AnimateSearchService,
  ) {
  }

  logout(event: Event) {
    this.authService.logout()
    this.authVisibilityService.authError = false
    event.preventDefault()
    this.data.arrPosts = []
    this.route.navigate(['/admin', 'login'])
  }
}
