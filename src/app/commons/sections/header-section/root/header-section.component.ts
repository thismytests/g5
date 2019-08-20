import {
  Component,
  Inject, OnInit
} from '@angular/core';

import {Router} from '@angular/router';

// config
import {pagesUrl} from 'environments/environment';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

// store
import {AuthState} from 'app/commons/store/auth/auth.types';
import {AppLoginService} from 'app/commons/api/login';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {
  @select(['auth', 'user']) users: Observable<AuthState>;

  userUnfo = {
    photoURL: null,
    email: null
  };

  private sub1 = null;

  constructor(@Inject(pagesUrl) private pagesUrlLinks,
              public appLoginService: AppLoginService,
              private router: Router) {
  }


  relocateHome() {
    this.router.navigate([pagesUrl.home]);
  }

  ngOnInit(): void {
    this.users.subscribe((data) => {
      if (!data) {
        this.userUnfo.photoURL = null;
        return;
      }

      this.userUnfo.photoURL = data['photoURL'];
      this.userUnfo.email = data['email'];
    });
  }

  logIn() {
    this.appLoginService.getAuthKey();

  }

  logOut() {
    this.appLoginService.signOut();
  }
}

