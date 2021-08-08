import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../Shared/services/data.service";
import {AlertDeleteEnter, PostsEnter, PostsLeave} from "../../../Shared/animations/animate.consts";
import {AlertDeleteVisibilityService} from "./alert-delete-visibility.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-admin-page',
  templateUrl: './main-admin-page.component.html',
  styleUrls: ['./main-admin-page.component.scss'],
  animations: [PostsEnter, AlertDeleteEnter, PostsLeave]
})
export class MainAdminPageComponent implements OnInit, OnDestroy {

  postId: any
  stream: Subscription

  constructor(
    public data: DataService,
    public alertDeleteVisibilityService: AlertDeleteVisibilityService,
  ) {
  }

  ngOnInit() {
    this.data.arrPosts = []
    this.stream = this.data.getPost().subscribe((posts) => {
      this.data.arrPosts = posts
    })
  }

  getPost(postId: any) {
    this.postId = postId
  }

  deletePost() {
    this.data.deletePost(this.postId)
    this.alertDeleteVisibilityService.alertDelete()
  }

  ngOnDestroy() {
    this.stream.unsubscribe()
  }
}
