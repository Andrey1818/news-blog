import {Component} from '@angular/core';
import {AnimateSearchService} from "../../../../Shared/services/animate-search.service";

@Component({
  selector: 'app-user-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(
    public animateService: AnimateSearchService
  ) {
  }
}
