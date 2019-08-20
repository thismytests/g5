import {
  Component,
  Renderer2,
} from '@angular/core';

// base container
import {BaseContainerComponent} from 'app/commons/base-container';

@Component({
  selector: 'app-not-found-container',
  templateUrl: './not-found-container.component.html',
  styleUrls: ['./not-found-container.component.css']
})
export class NotFoundContainerComponent extends BaseContainerComponent {
  constructor(public renderer: Renderer2) {
    super(renderer);
  }
}
