import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// spinner
import {SpinnerModule} from 'app/commons/components/spinner';

// api
import {GitHubApiModule} from 'app/commons/api/git-hub-api';

// root
import {BlocksComponent} from './root/blocks.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,

    // spinner
    SpinnerModule,

    FormsModule,
    RouterModule,

    // api
    GitHubApiModule
  ],
  declarations: [BlocksComponent],
  exports: [BlocksComponent],
})
export class BlocksModule {
}
