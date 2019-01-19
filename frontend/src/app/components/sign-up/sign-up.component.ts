import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SignUpService} from './sign-up.service';
import {isSuccess} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private signupService: SignUpService,
              ) { }

  ngOnInit() {

  }
  onRegister(ng: NgForm) {
    this.signupService.SignupUser(this.email, this.password)
      .subscribe(
        (data) => {
          console.log(data);
           /*if isSuccess()
            router.router('/home')*/
        }
      );
  }

}
