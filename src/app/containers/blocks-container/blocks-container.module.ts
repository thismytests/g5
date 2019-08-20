import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// sections
import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// components
import {BlocksModule} from './components/blocks';
import {SearchModule} from 'app/commons/components/search';

// routing
import {routing} from './routing';

// guard
import {AuthModule} from 'app/commons/guards/auth';
import {DeactivateGuardModule} from 'app/commons/guards/deactivate-guard';

// root
import {BlocksContainerComponent} from './root/blocks-container.component';


const sections = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

@NgModule({
  imports: [
    CommonModule,

    // api
    BlocksModule,

    // components
    SearchModule,

    // guards
    AuthModule,
    DeactivateGuardModule,

    // sections
    ...sections,

    RouterModule.forChild(routing)
  ],
  declarations: [BlocksContainerComponent]
})
export class BlocksContainerModule {
}
