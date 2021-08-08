import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../Shared/services/data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Post} from "../../../Shared/interfaces/app.interfaces";
import {loadEnter} from "../../../Shared/animations/animate.consts";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss'],
  animations: [loadEnter]
})
export class AdminPostComponent implements OnInit, OnDestroy {

  stream: Subscription
  post: Post

  constructor(
    public data: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.stream = this.data.getPost().subscribe(posts => {
      this.data.arrPosts = posts
    }, () => null, () => {
      this.route.params.subscribe((params: Params) => {
        this.post = this.data.finder(params.id)
      })
    })
  }

  ngOnDestroy() {
    this.stream.unsubscribe()
  }
}
