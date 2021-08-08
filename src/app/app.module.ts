import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FormsModule} from "@angular/forms";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserRouteModule} from "./User/shared/modules/user-route.module";
import {SharedModule} from "./Shared/modules/shared.module";

import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {environment} from '../environments/environment';

import {AuthInterceptor} from "./Shared/interceptor/auth.interceptor";

import {AppComponent} from './app.component';


const INTERTCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserRouteModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [INTERTCEPTOR],
  bootstrap: [AppComponent]
})

export class AppModule {
}
