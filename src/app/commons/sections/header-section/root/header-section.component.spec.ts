import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// @angular/material
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

// routing
import {RouterTestingModule} from '@angular/router/testing';


// tested entity
import {HeaderSectionComponent} from './header-section.component';

describe('HeaderSectionComponent', () => {
  let component: HeaderSectionComponent;
  let fixture: ComponentFixture<HeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // @angular material
        MatButtonModule,
        MatMenuModule,
        MatIconModule,

        RouterTestingModule,

        TranslationsModule,
      ],
      declarations: [HeaderSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
