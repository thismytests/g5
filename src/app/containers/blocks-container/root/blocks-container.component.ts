import {
  Component,
  Renderer2
} from '@angular/core';

import {BaseContainerComponent} from 'app/commons/base-container';

@Component({
  selector: 'app-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.css']
})
export class BlocksContainerComponent extends BaseContainerComponent {
  items: any[] = [];

  constructor(public renderer: Renderer2) {
    super(renderer);
  }

  onSearch(data) {
    this.items = data.items;
  }

}
