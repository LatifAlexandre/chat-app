import { Observable, of, from } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  authState: any = null;
  username = '';

  constructor(private router: Router, public afAuth: AngularFireAuth) {}

  // login anonymously to firebase
  login(username) {
    return this.afAuth.auth.signInAnonymously()
    .then((authState) => {
      // we set the values
      this.authState = authState;
      this.username = username;
    })
  }

  // logout
  logout(): void {
    // sign out and redirection to login page
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }

  getUsername() {
    return this.username;
  }

  // return true if the user is logged anonymously to firebase
  canActivate(): boolean {
    if (!this.authState) {
      this.router.navigate(['/login']);
    }
    return !!this.authState;
  }
}
