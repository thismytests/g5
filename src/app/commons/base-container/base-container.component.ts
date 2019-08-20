import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-base-container',
  template: `
    <div #firstSubtrahendHeight>header</div>
    <div #windowHeightWithoutSubtrahendHeights>content</div>
  `
})
export class BaseContainerComponent implements AfterViewInit {
  @ViewChild('firstSubtrahendHeight', {read: ElementRef}) firstSubtrahendHeight: ElementRef;
  @ViewChild('secondSubtrahendHeight', {read: ElementRef}) secondSubtrahendHeight: ElementRef;
  @ViewChild('windowHeightWithoutSubtrahendHeights', {read: ElementRef}) windowHeightWithoutSubtrahendHeights: ElementRef;

  constructor(public renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const removedHeight = this.getRemovedHeight();
    const heightForScroll = this.defineHeightForScroll(removedHeight);
    this.setScrollWrapperHeight(heightForScroll);
  }

  /**
   * @description define remove height
   *
   * @method getRemovedHeight
   * @private
   *
   * @param prohibitedLinks {Array} link witch not allow render in component
   * @return {string} height
   * */
  public getRemovedHeight(): number {
    const offsetHeightKey = 'offsetHeight';
    let removedSections = 0;

    if (this.firstSubtrahendHeight) {
      removedSections += this.firstSubtrahendHeight.nativeElement[offsetHeightKey];
    }

    if (this.secondSubtrahendHeight) {
      removedSections += this.secondSubtrahendHeight.nativeElement[offsetHeightKey];
    }

    return removedSections;

  }

  /**
   * @description Define height for scroll.
   * @description It will be subtract of window.innerHeight and param subtractHeight.
   *
   * @method getRemovedHeight.
   * @private
   *
   * @param subtractHeight {number} Height with will be subtract from window.innerHeight.
   * @return {number} Height for scroll.
   * */
  public defineHeightForScroll(subtractHeight: number): number {
    const windowHeight = window.innerHeight;
    return windowHeight - subtractHeight;
  }

  /**
   * @description Set height for scroll wrapper.
   *
   * @method setScrollWrapperHeight
   * @public
   *
   * @param height {number} height with will be setting for scroll wrapper.
   * @return {string} height
   * */
  public setScrollWrapperHeight(height: number) {
    if (this.windowHeightWithoutSubtrahendHeights) {
      this.renderer.setStyle(this.windowHeightWithoutSubtrahendHeights.nativeElement, 'height', height + 'px');
    }
  }


  @HostListener('window:resize')
  onResize() {
    const removedHeight = this.getRemovedHeight();
    const heightForScroll = this.defineHeightForScroll(removedHeight);

    this.setScrollWrapperHeight(heightForScroll);
  }

}
