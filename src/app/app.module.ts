import { AuthenticationService } from './services/authentication.service';
// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// external modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// my containers
import { AppComponent } from './app.component';
import { ChatPageComponent } from './containers/chat-page/chat-page.component';
import {  LoginPageComponent } from './containers/login-page/login-page.component';

// routes
const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'chat', component: ChatPageComponent, canActivate: [AuthenticationService]},
  { path: '', redirectTo: '/login',pathMatch: 'full'}
];


@NgModule({
  declarations: [
    // containers
    AppComponent,
    ChatPageComponent,
    LoginPageComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    // external modules
    AngularFontAwesomeModule,
    // firebase
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
