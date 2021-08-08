import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {UserModule} from "./user.module";

import {MainLayoutComponent} from "../components/main-layout/main-layout.component";
import {PostPageComponent} from '../../components/post-page/post-page.component';
import {PostComponent} from "../../components/post/post.component";
import {SearchComponent} from "../../components/search/search.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: PostPageComponent},
      {path: 'post-user/:id', component: PostComponent, pathMatch: 'full'},
      {path: '', component: SearchComponent, outlet: 'search'}
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('../../../Admin/shared/modules/admin-routing.module').then(m => m.AdminRoutingModule)
  }
]

@NgModule({
  imports: [
    FormsModule,
    UserModule,
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule, UserModule]
})
export class UserRouteModule {
}
