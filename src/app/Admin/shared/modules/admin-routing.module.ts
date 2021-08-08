import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {SharedModule} from "../../../Shared/modules/shared.module";
import {AdminModule} from "./admin.module";

import {AuthGuard} from "../guards/auth.guard";

import {AdminLayoutComponent} from "../components/admin-layout/admin-layout.component";
import {MainAdminPageComponent} from "../../components/main-admin-page/main-admin-page.component";
import {AuthMainComponent} from "../../components/auth-main/auth-main.component";
import {CreatePostComponent} from "../../components/create-post/create-post.component";
import {AdminPostComponent} from "../../components/admin-post/admin-post.component";
import {AdminPostRefactorComponent} from "../../components/admin-post-refactor/admin-post-refactor.component";
import {SearchAdminComponent} from "../../components/search/search-admin.component";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: AuthMainComponent},
      {path: 'main', component: MainAdminPageComponent, canActivate: [AuthGuard]},
      {path: '', component: SearchAdminComponent, outlet: 'admin-search'},
      {path: 'create', component: CreatePostComponent, canActivate: [AuthGuard]},
      {path: 'post-admin/:id', component: AdminPostComponent, canActivate: [AuthGuard]},
      {path: 'post-refactor/:id', component: AdminPostRefactorComponent, canActivate: [AuthGuard]}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    AdminModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule, AdminModule]
})
export class AdminRoutingModule {
}
