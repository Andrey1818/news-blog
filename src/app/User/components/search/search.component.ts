import {Component} from '@angular/core';
import {AnimateSearchService} from "../../../Shared/services/animate-search.service";
import {SliderAnimate} from "../../../Shared/animations/animate.consts";
import {DataService} from "../../../Shared/services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [SliderAnimate]
})
export class SearchComponent {

  constructor(
    public data: DataService,
    public animateService: AnimateSearchService
  ) {
  }
}
