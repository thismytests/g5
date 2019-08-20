import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// http
import {HttpClientModule} from '@angular/common/http';

// redux
import {StoreModule} from 'app/commons/store';

// service
import {AppLoginService} from './app-login.service';

// env
import {environment} from 'environments/environment.prod';

// firebase
import {
  AngularFireAuth,
  AngularFireAuthModule
} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  imports: [
    CommonModule,

    AngularFireModule.initializeApp(environment.firebase, 'prototype'),
    AngularFireAuthModule,

    // http
    HttpClientModule,

    // redux
    StoreModule

  ],
  providers: [
    AppLoginService,
    AngularFireAuth
  ],
})
export class AppLoginModule {
}
