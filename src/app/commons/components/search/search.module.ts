import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

// api
import {GitHubApiModule} from 'app/commons/api/git-hub-api';

// root
import {SearchComponent} from './root/search.component';


@NgModule({
  imports: [
    CommonModule,

    // api
    GitHubApiModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {
}
