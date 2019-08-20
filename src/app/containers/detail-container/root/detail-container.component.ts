import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {BaseContainerComponent} from 'app/commons/base-container';

// api
import {
  GitHubApiService,
  ItemByUrl
} from 'app/commons/api/git-hub-api';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css']
})
export class DetailContainerComponent extends BaseContainerComponent implements OnInit, OnDestroy {
  url: string;
  data: ItemByUrl;

  private sub1: any;
  private sub2: any;

  constructor(public gitHubApiService: GitHubApiService,
              private route: ActivatedRoute,
              public renderer: Renderer2) {
    super(renderer);
  }

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe(params => {
      this.url = params['id'];

      this.sub2 = this.gitHubApiService
        .getByUrl(this.url)
        .subscribe((data) => {
          this.data = data as ItemByUrl;
        });
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }


}
