import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SignUpService} from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signupService: SignUpService) { }

  ngOnInit() {

  }
  onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signupService.SignupUser(email, password);
  }

}
