import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


import {SharedModule} from "../../../Shared/modules/shared.module";

import {MainLayoutComponent} from "../components/main-layout/main-layout.component";
import {PostComponent} from "../../components/post/post.component";
import {SearchComponent} from "../../components/search/search.component";
import {PostPageComponent} from "../../components/post-page/post-page.component";
import {PostsGenerateComponent} from "../../components/post-page/posts-generate/posts-generate.component";


@NgModule({
  declarations: [
    MainLayoutComponent,
    PostComponent,
    SearchComponent,
    PostPageComponent,
    PostsGenerateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent,
    PostComponent,
    SearchComponent,
    PostPageComponent,
    PostsGenerateComponent,
  ]
})
export class UserModule {
}
