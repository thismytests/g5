import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() data: {
    'login': string;
    'avatar_url': string;
    'type': string;
    'url': string;
  };

  constructor() {
  }

  ngOnInit() {
  }

}
