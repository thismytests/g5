import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailContainerComponent} from './root/detail-container.component';

import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// components
import {DetailModule} from './components/detail';

// routing
import {routing} from './routing';

// guards
import {AuthModule} from 'app/commons/guards/auth';

// root
import {RouterModule} from '@angular/router';


const sections = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

@NgModule({
  imports: [
    CommonModule,

    // component
    DetailModule,

    // Guards
    AuthModule,

    RouterModule.forChild(routing),
    ...sections
  ],

  declarations: [DetailContainerComponent]
})
export class DetailContainerModule {
}
