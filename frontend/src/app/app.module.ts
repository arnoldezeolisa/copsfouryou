import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import {SignInService} from './components/sign-in/sign-in.service';





@NgModule({
  declarations: [
    AppComponent,    SignUpComponent,
    SignInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
