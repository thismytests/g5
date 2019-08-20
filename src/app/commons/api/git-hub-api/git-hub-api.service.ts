import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// rxjs
import {Observable} from 'rxjs/Observable';

// config
import {gitHubApiUrl} from 'environments/environment';

// types
import {
  Api,
  ItemByUrl
} from './types';


@Injectable()
export class GitHubApiService {
  private host = gitHubApiUrl;


  constructor(public http: HttpClient) {
  }

  getItems(query: string): Observable<Api> {
    const url = this.host + '/search/repositories';

    const search = {
      page: '1',
      per_page: '20',
      sort: 'stars',
      order: 'desc',
      q: query
    };

    return this.http.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token 099d7200cf500ca7308ad80a19881264344ad2d3'
      },
      params: search
    }) as (Observable<Api>);

  }

  getByUrl(userUrl: string): Observable<ItemByUrl> {
    const url = this.host + '/users/' + userUrl;

    return this.http.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token 099d7200cf500ca7308ad80a19881264344ad2d3'
      }
    }) as (Observable<ItemByUrl>);

  }
}
