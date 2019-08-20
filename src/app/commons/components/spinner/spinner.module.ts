import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './root/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {
}
