import { LoginPageSandboxService } from './../login-page-sandbox.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  template:`
    <h1> login page </h1>

    <div class="input-group input-group-sm mb-3">
      <input type="text" class="form-control"
             [(ngModel)]="username">
    </div>

    <button type="button" class="btn btn-primary"
           (click)="onGoRoomsClick()">
      Go to the rooms
    </button>
  `,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string = '';

  constructor(private router: Router, private loginPageSandboxService: LoginPageSandboxService) { }

  ngOnInit() {
  }

  onGoRoomsClick() {
    this.loginPageSandboxService.login(this.username)
    .pipe(
      take(1)
    ).subscribe( () => {
      this.router.navigate(['/chat']);
    })
  }

}
