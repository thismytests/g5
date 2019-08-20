// routing
import {Route} from '@angular/router';

// config
import {pagesUrl} from '../environments/environment';

// not found
import {NotFoundContainerComponent} from 'app/not-found/not-found-container';



export const routing: Array<Route> = [
  {
    path: '',
    redirectTo: pagesUrl.home,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundContainerComponent
  },
];
