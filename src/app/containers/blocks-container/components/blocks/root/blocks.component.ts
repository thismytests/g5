import {ChangeDetectionStrategy, Component, Input,} from '@angular/core';
// relocateFunc
import {relocateToDetail} from 'app/commons/relocate-funcs';
// types
import {Item} from 'app/commons/components/search/root';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocksComponent {
  relocateToDetail = relocateToDetail.bind(this);
  @Input() items: Array<Item> = [];

  constructor(public router: Router) {

  }
}
