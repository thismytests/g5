import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableContainerComponent} from './root/table-container.component';

import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// components
import {TableModule} from './components/table';
import {SearchModule} from 'app/commons/components/search';


// guards
import {AuthModule} from 'app/commons/guards/auth';
import {DeactivateGuardModule} from 'app/commons/guards/deactivate-guard';

// routing
import {routing} from './routing';

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

    // components
    TableModule,
    SearchModule,

    // guards
    AuthModule,
    DeactivateGuardModule,

    // routing
    RouterModule.forChild(routing),

    // sections
    ...sections,


  ],
  declarations: [TableContainerComponent]
})
export class TableContainerModule {
}
