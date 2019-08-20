import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// containers
import {BlocksContainerModule} from 'app/containers/blocks-container';
import {DetailContainerModule} from 'app/containers/detail-container';
import {TableContainerModule} from 'app/containers/table-container';

import {NotFoundContainerModule} from 'app/not-found/not-found-container';

// root routing
import {routing} from './routing';

// root component
import {AppComponent} from './app.component';
import {HomeContainerModule} from 'app/containers/home-container';

// bootstap
import {
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // bootstrap
    NgbModule.forRoot(),

    // router
    RouterModule.forRoot(routing),

    // containers
    BlocksContainerModule,
    DetailContainerModule,
    TableContainerModule,

    HomeContainerModule,

    NotFoundContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
