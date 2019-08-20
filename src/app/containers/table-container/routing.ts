import {Route} from '@angular/router';

// config
import {pagesUrl} from 'environments/environment';

// guards
import {AuthGuard} from 'app/commons/guards/auth';
import {CanDeactivateGuard} from 'app/commons/guards/deactivate-guard';
// root
import {TableContainerComponent} from './root';

export const routing: Array<Route> = [
  {
    path: pagesUrl.table,
    component: TableContainerComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];
