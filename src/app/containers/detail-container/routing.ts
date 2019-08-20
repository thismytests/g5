import {Route} from '@angular/router';

// config
import {pagesUrl} from 'environments/environment';

// guards
import {AuthGuard} from 'app/commons/guards/auth';

// root
import {DetailContainerComponent} from './root';


export const routing: Array<Route> = [
  {
    path: pagesUrl.detail + '/:id',
    component: DetailContainerComponent,
    canActivate: [AuthGuard]

  }
];
