import {Component} from '@angular/core';
import {AnimateSearchService} from "../../../Shared/services/animate-search.service";
import {SliderAnimate} from "../../../Shared/animations/animate.consts";
import {DataService} from "../../../Shared/services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-admin.component.html',
  styleUrls: ['./search-admin.component.scss'],
  animations: [SliderAnimate]
})
export class SearchAdminComponent {

  constructor(
    public data: DataService,
    public AnimateService: AnimateSearchService
  ) {
  }
}
