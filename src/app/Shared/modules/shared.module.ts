import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";

import {MouseEnterDirective} from "../directives/mouse-enter.directive";
import {PostsFilterPipe} from "../pipes/posts-filter.pipe";

@NgModule({
  declarations: [
    MouseEnterDirective,
    PostsFilterPipe
  ],
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    MouseEnterDirective,
    PostsFilterPipe
  ]
})
export class SharedModule {
}
