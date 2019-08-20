import {
  Component,
  EventEmitter, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {GitHubApiService} from 'app/commons/api/git-hub-api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() items: EventEmitter<any> = new EventEmitter<any>();
  public SEARCH = 'search';

  sub1: any;
  searchForm: FormGroup;

  constructor(public gitHubApiService: GitHubApiService) {
  }

  ngOnInit() {
    this.createFrom();
    this.sub1 = this.searchForm.valueChanges.subscribe(data => {
      this.onSearch(data[this.SEARCH]);
    });
  }

  createFrom() {
    const formControls: any = {
      [this.SEARCH]: new FormControl('', [
        Validators.required
      ])
    };
    this.searchForm = new FormGroup(formControls);
  }

  onSearch(query) {
    this.sub1 = this.gitHubApiService.getItems(query)
      .subscribe((data) => {
        this.items.emit(data);
      });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

  }


}
