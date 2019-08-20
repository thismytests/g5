import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router, RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';

// Rxjs
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//  config
import {pagesUrl} from 'environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
  @select(['auth']) auth: Observable<boolean>;

  constructor(public router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
    return this.auth
      .map(v => {
        if (!v['user']) {
          this.router.navigate([pagesUrl['404']]);
        } else {
          return true;
        }
      });

  }

}
