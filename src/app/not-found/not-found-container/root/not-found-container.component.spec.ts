import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// sections
import {HeaderSectionModule} from 'prototype/commons/sections/header-section';
import {ContentSectionModule} from 'prototype/commons/sections/content-section';
import {FooterSectionModule} from 'prototype/commons/sections/footer-section';

// children modules
import {NotFoundModule} from '../../not-found-component/';

// tested entity
import {NotFoundContainerComponent} from './not-found-container.component';
import {RouterTestingModule} from '@angular/router/testing';

const sections: Array<any> = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

describe('NotFoundContainerComponent', () => {
  let component: NotFoundContainerComponent;
  let fixture: ComponentFixture<NotFoundContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ...sections,
        NotFoundModule],
      declarations: [NotFoundContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
