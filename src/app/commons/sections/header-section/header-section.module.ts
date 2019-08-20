import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

//  config
import {pagesUrl} from 'environments/environment';

// store
import {StoreModule} from 'prototype/commons/store/store.module';

// api
import {AppLoginModule} from 'app/commons/api/login';

// root
import {HeaderSectionComponent} from './root';

@NgModule({
  imports: [
    CommonModule,

    // api
    AppLoginModule,

    // routing
    RouterModule,
    StoreModule
  ],
  providers: [
    {
      provide: pagesUrl,
      useValue: pagesUrl
    }
  ],
  declarations: [HeaderSectionComponent],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule {
}
