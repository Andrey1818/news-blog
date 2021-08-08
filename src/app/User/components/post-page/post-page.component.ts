import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsEnter} from "../../../Shared/animations/animate.consts";
import {DataService} from "../../../Shared/services/data.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-posts',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  animations: [PostsEnter]
})
export class PostPageComponent implements OnInit, OnDestroy {

  stream: Subscription

  constructor(
    public data: DataService) {
  }

  ngOnInit() {
    this.data.arrPosts = []
    this.stream = this.data.getPost().subscribe(posts => {
      this.data.arrPosts = posts
    })
  }

  ngOnDestroy() {
    this.stream.unsubscribe()
  }

}
