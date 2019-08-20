import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// @angular/material
import {MatButtonModule} from '@angular/material/button';

// todo ... wiil be refactoring
import {StoreModule} from 'app/commons/store';

// sections
import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// routing
import {routing} from './routing';

// root
import {HomeContainerComponent} from './root';


const sections = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule,

    //  @angular/material
    MatButtonModule,

    // ...sections
    ...sections,

    RouterModule.forChild(routing),
  ],
  declarations: [HomeContainerComponent]
})
export class HomeContainerModule {
}
