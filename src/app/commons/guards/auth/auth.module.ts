import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// store
import {StoreModule} from 'app/commons/store';

import {AuthGuard} from './auth';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    //  store
    StoreModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule {
}
