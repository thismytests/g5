import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// tested entity
import {FooterSectionComponent} from './footer-section.component';

describe('FooterSectionComponent', () => {
  let component: FooterSectionComponent;
  let fixture: ComponentFixture<FooterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
