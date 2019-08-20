import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

// relocate funcs
import {relocateToDetail} from 'app/commons/relocate-funcs';

// types
import {Item} from 'app/commons/components/search';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() items: Array<Item> = [];
  relocateToDetail = relocateToDetail.bind(this);

  constructor(public router: Router) {

  }
}
