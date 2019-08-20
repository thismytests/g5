import {Route} from '@angular/router';

// guards
import {AuthGuard} from 'app/commons/guards/auth';
import {CanDeactivateGuard} from 'app/commons/guards/deactivate-guard';

// config
import {pagesUrl} from 'environments/environment';


// root
import {BlocksContainerComponent} from './root';

export const routing: Array<Route> = [
  {
    path: pagesUrl.blocks,
    component: BlocksContainerComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];
