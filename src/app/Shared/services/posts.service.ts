import {Injectable} from "@angular/core";
import {Post} from "../interfaces/app.interfaces"
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class PostsService {

  constructor(
    private http: HttpClient,
  ) {

  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.fbDbKey}/posts.json`, post)
      .pipe(
        map((response: any) => {
          return {
            ...post,
            id: response.name
          } as Post
        })
      )
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.fbDbKey}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key
            }))
        })
      )
  }

  deletePost(id: any) {
    return this.http.delete(`${environment.fbDbKey}/posts/${id}.json`)
  }

  getPostByIdForRefactor(id: any): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbKey}/posts/${id}.json`)
      .pipe(
        map((post: Post) => {
          return {
            ...post, id,
          } as Post
        })
      )
  }

  refactor(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fbDbKey}/posts/${post.id}.json`, post)
  }
}
