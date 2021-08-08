import {Component, Input} from '@angular/core';
import {Post} from "../../../../Shared/interfaces/app.interfaces";
import {DataService} from "../../../../Shared/services/data.service";

@Component({
  selector: 'app-posts-generate',
  templateUrl: './posts-generate.component.html',
  styleUrls: ['./posts-generate.component.scss']
})
export class PostsGenerateComponent {
  @Input() post: Post

  constructor(
    public data: DataService
  ) {
  }
}


