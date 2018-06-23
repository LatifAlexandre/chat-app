import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageSandboxService {

  constructor(private authenticationService: AuthenticationService) {}
  

  public login(username: string) {
    return this.authenticationService.login(username);
  }

  public logIfSession(): Observable<boolean> {
    return this.authenticationService.logIfSession();
  }
}
