import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// sections
import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// children modules
import {NotFoundModule} from '../not-found-component/';

// root component
import {NotFoundContainerComponent} from './root';

const sections: Array<any> = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

@NgModule({
  imports: [
    CommonModule,

    ...sections,
    //    children modules
    NotFoundModule
  ],
  declarations: [NotFoundContainerComponent]
})
export class NotFoundContainerModule {
}
