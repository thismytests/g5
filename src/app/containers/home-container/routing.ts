import {Route} from '@angular/router';

// config
import {pagesUrl} from 'environments/environment';

// root
import {HomeContainerComponent} from './root';


export const routing: Array<Route> = [
  {
    path: pagesUrl.home,
    component: HomeContainerComponent
  }
];
