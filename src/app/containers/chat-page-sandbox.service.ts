import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatPageSandboxService {

  username = this.authenticationService.getUsername();

  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    return this.authenticationService.logout();
  }

}
