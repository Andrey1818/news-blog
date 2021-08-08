import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../../Shared/interfaces/app.interfaces";
import {DataService} from "../../../../Shared/services/data.service";
import {AlertDeleteVisibilityService} from "../alert-delete-visibility.service";

@Component({
  selector: 'app-admin-post-generate',
  templateUrl: './admin-post-generate.component.html',
  styleUrls: ['./admin-post-generate.component.scss']
})
export class AdminPostGenerateComponent {

  @Input() post: Post
  @Output() id: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    public data: DataService,
    public alertDeleteVisibilityService: AlertDeleteVisibilityService
  ) {
  }

}
