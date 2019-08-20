// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAzIDrBYzDza9VT8WH11oBpyb-oTEddJ5A',
    authDomain: 'fcc-book-trading-91424.firebaseapp.com',
    databaseURL: 'https://fcc-book-trading-91424.firebaseio.com',
    projectId: 'fcc-book-trading-91424',
    storageBucket: '',
    messagingSenderId: '1057970477359'
  }
};
// api
export const gitHubApiUrl = 'https://api.github.com';

// url
export const pagesUrl = {
  'login': 'login',
  '404': '404',

  'home': 'home',
  'blocks': 'blocks',
  'table': 'table',
  'detail': 'detail',

  '/': '',
  'default': '**',
};
