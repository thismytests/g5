import {
  Component,
  Renderer2
} from '@angular/core';

import {BaseContainerComponent} from 'app/commons/base-container';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent extends BaseContainerComponent {
  constructor(public renderer: Renderer2) {
    super(renderer);
  }
}
