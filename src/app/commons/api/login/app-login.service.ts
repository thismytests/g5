import {
  Injectable
} from '@angular/core';

// redux action creator
import {
  AuthActionService
} from 'app/commons/store/auth';

// firebase
import {auth} from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class AppLoginService {
  constructor(private authActionsCreator: AuthActionService,
              public angularFireAuth: AngularFireAuth
  ) {
  }


  getAuthKey(): Promise<any> {
    return this.angularFireAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        this.authActionsCreator.setToken(data);
      });
  }

  signOut() {
    this.angularFireAuth.auth
      .signOut().then(() => {
        this.authActionsCreator.deleteToken();
    });
  }

}
