import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// root
import {GitHubApiService} from './git-hub-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GitHubApiService
  ],
  declarations: []
})
export class GitHubApiModule {
}
