import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CanDeactivateGuard} from './can-deactivate-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CanDeactivateGuard]
})
export class DeactivateGuardModule {
}
