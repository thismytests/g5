// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import {getTestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

/**base container*/
// const context = require.context('./app/commons/base-container/', true, /\.spec\.ts$/);

// login
// const context = require.context('./app/login/login-component/', true, /\.spec\.ts$/);

/**api*/
// const context = require.context('./app/commons/api/', true, /\.spec\.ts$/);
// const context = require.context('./app/commons/api/', true, /base-api.service.spec.ts$/);
// const context = require.context('./app/commons/api/login/', true, /app-login.service.spec.ts$/);

// And load the modules.
context.keys().map(context);
