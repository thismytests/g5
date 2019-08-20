import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// spinner
import {SpinnerModule} from 'app/commons/components/spinner';

// root
import {TableComponent} from './root/table.component';

// api
import {GitHubApiModule} from 'app/commons/api/git-hub-api';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    // spinner
    SpinnerModule,
    // api
    GitHubApiModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule {
}
