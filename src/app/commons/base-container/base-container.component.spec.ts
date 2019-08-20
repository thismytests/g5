import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// mock routing
import {RouterTestingModule} from '@angular/router/testing';

// tested component
import {BaseContainerComponent} from './base-container.component';

describe('BaseContainerComponent', () => {
  let component: BaseContainerComponent;
  let fixture: ComponentFixture<BaseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // sections
      imports: [
        // router mock
        RouterTestingModule,

      ],
      declarations: [BaseContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`method 'getRemovedHeight'`, () => {
    it(`to be defined`, () => {
      expect(component.getRemovedHeight).toBeDefined();
    });

    it(`must return height`, () => {
      const headerOffsetHeight = component.firstSubtrahendHeight.nativeElement['offsetHeight'];
      expect(component.getRemovedHeight()).toBe(headerOffsetHeight);
    });
  });

  describe(`method 'defineScrollWrapperHeight'`, () => {
    it(`to be defined`, () => {
      expect(component.defineHeightForScroll).toBeDefined();
    });

    it(`must return difference of window.offsetHeight and removed height`, () => {
      const windowHeight = window.innerHeight;
      const removedHeight = 50;
      expect(component.defineHeightForScroll(removedHeight)).toBe(windowHeight - removedHeight);
    });
  });

  describe(`method 'setScrollWrapperHeight'`, () => {
    it(`to be defined`, () => {
      expect(component.setScrollWrapperHeight).toBeDefined();
    });

    it(`must set new height for scroll wrapper`, () => {
      const offsetHeightKey = 'offsetHeight';
      const newHeight = 1000;

      const scrollWrapperBefore = component.windowHeightWithoutSubtrahendHeights.nativeElement[offsetHeightKey];
      component.setScrollWrapperHeight(newHeight);
      const scrollWrapperAfter = component.windowHeightWithoutSubtrahendHeights.nativeElement[offsetHeightKey];
      expect(scrollWrapperBefore).not.toBe(scrollWrapperAfter);
      expect(scrollWrapperAfter).toBe(newHeight);
    });
  });

});
