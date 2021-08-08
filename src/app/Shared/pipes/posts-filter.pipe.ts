import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../interfaces/app.interfaces";


@Pipe({
  name: 'postsFilter'
})
export class PostsFilterPipe implements PipeTransform {
  constructor() {
  }

  transform(value: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return value
    } else {
      return value.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
