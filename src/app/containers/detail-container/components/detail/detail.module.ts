import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './root/detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent],
})
export class DetailModule { }
