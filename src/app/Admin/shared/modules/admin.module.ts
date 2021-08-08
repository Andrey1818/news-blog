import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../../../Shared/modules/shared.module";

import {AuthGuard} from "../guards/auth.guard";
import {AlertDeleteVisibilityService} from "../../components/main-admin-page/alert-delete-visibility.service";

import {MainAdminPageComponent} from '../../components/main-admin-page/main-admin-page.component';
import {AuthHomeComponent} from "../../components/auth-main/auth-home/auth-home.component";
import {AuthMainComponent} from "../../components/auth-main/auth-main.component";
import {AdminLayoutComponent} from "../components/admin-layout/admin-layout.component";
import {AuthErrorComponent} from '../../components/auth-main/auth-error/auth-error.component';
import {CreatePostComponent} from "../../components/create-post/create-post.component";
import {AdminPostGenerateComponent} from '../../components/main-admin-page/admin-post-generate/admin-post-generate.component';
import {AdminPostComponent} from '../../components/admin-post/admin-post.component';
import {AdminPostRefactorComponent} from '../../components/admin-post-refactor/admin-post-refactor.component';
import {SearchAdminComponent} from "../../components/search/search-admin.component";
import {AlertComponent} from "../components/alert/alert.component";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthHomeComponent,
    MainAdminPageComponent,
    AuthMainComponent,
    AuthErrorComponent,
    CreatePostComponent,
    AdminPostGenerateComponent,
    AdminPostComponent,
    AdminPostRefactorComponent,
    SearchAdminComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    AdminLayoutComponent
  ],
  providers: [AuthGuard, AlertDeleteVisibilityService]
})
export class AdminModule {
}
