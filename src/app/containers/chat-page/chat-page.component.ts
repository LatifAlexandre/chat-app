import { Router } from '@angular/router';
import { ChatPageSandboxService } from './../chat-page-sandbox.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  template:`
    <h1> chat page </h1>

    hello {{ username }}

    <button class="btn btn-danger"
            (click)="onLogoutClick()" >
      log out
    </button>
  `,
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  
  username = this.sb.username;

  constructor(private router: Router, private sb: ChatPageSandboxService) {

  }

  ngOnInit() {
  }

  onLogoutClick() {
    this.sb.logout().then( () => {
      this.router.navigate(['/login'])
    })
  }

}
