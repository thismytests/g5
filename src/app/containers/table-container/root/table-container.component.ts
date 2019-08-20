import {
  Component,
  Input,
  Renderer2
} from '@angular/core';
import {BaseContainerComponent} from 'app/commons/base-container';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent extends BaseContainerComponent {
  @Input() items: any = [];

  constructor(public renderer: Renderer2) {
    super(renderer);
  }

  onSearch(data) {
    this.items = data.items;
  }

}
