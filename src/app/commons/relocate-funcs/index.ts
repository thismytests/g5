//  config
import {pagesUrl} from 'environments/environment';

function baseRelocate(data: string) {
  if (!this.router) {
    throw new Error('You must define router');
  }
  this.router.navigate([data]);
}

export const relocateToDetail = function (login: string) {
  const data = pagesUrl.detail + '/' + login;

  baseRelocate.call(this, data);
};
