import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  logged = false;
  username = '';

  constructor(private router: Router) {}

  login(username): Observable<boolean> {
    this.logged = true;
    this.username = username;
    
    return of(true);
  }

  canActivate(): boolean {
    if (!this.logged) {
      this.router.navigate(['/login']);
    }
    return this.logged;
  }

}
