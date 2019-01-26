import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './components/auth.service';
import { FeedComponent } from './components/feed/feed.component';
import { FeedmoduleComponent } from './components/feedmodule/feedmodule.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CopDashboardComponent } from './components/cop-dashboard/cop-dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { MessangerModuleComponent } from './components/messanger-module/messanger-module.component';
import { NotificationComponent } from './components/notification/notification.component';






@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    FeedComponent,
    FeedmoduleComponent,
    ProfileComponent,
    CopDashboardComponent,
    MessagesComponent,
    PostJobComponent,
    MessangerModuleComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule,
    FeedmoduleComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


