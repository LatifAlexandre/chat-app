import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  template:`
    <h1> chat page </h1>

    hello {{ username }}
  `,
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  
  username = this.authenticationService.username;

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
  }

}
