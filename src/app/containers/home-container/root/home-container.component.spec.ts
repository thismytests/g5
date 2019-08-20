import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {StoreModule} from 'app/commons/store';

// sections
import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// tested entity
import {HomeContainerComponent} from './home-container.component';
import {RouterTestingModule} from '@angular/router/testing';

const sections = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // sections
        ...sections,
        // mock routing
        RouterTestingModule,
        StoreModule
      ],
      declarations: [HomeContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
