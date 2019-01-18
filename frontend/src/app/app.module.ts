import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {SignInService} from './components/sign-in/sign-in.service';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import {SignUpService} from './components/sign-up/sign-up.service';
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [SignInService,
              SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


