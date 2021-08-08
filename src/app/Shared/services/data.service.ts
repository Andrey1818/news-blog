import {Injectable} from "@angular/core";
import {PostsService} from "./posts.service";
import {Post} from "../interfaces/app.interfaces";
import {AlertService} from "../../Admin/shared/services/alert.service";

@Injectable({providedIn: 'root'})

export class DataService {

  arrPosts: Post[] = []
  searchPost: string

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  getPost() {
    return this.postsService.getAllPosts()
  }


  finder(id: any): any {
    return (<Post>this.arrPosts.find(p => p.id === id))
  }


  deletePost(postId: any) {
    this.postsService.deletePost(postId).subscribe(() => {
      this.arrPosts = this.arrPosts.filter(post => post.id !== postId)
      this.alertService.danger("Пост был успешно удален")
    })
  }
}
