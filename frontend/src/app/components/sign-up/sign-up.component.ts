import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SignUpService} from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private signupService: SignUpService) { }

  ngOnInit() {

  }
  onRegister() {
    this.signupService.SignupUser(this.email, this.password)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

}
