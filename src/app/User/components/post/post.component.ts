import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Post} from "../../../Shared/interfaces/app.interfaces";
import {DataService} from "../../../Shared/services/data.service";
import {loadEnter} from "../../../Shared/animations/animate.consts";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [loadEnter]
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post
  stream: Subscription

  constructor(
    private route: ActivatedRoute,
    public data: DataService
  ) {
  }

  ngOnInit(): void {
    this.stream = this.data.getPost().subscribe((posts) => {
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
