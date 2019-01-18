import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SignUpService {
  constructor(private router: Router,
              private http: HttpClient) {
  }

  SignupUser(email: string, password: string) {
    var user = {email: email, password: password};

      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json; charset=utf-8');
      console.log("user data in auth module " + JSON.stringify(user) )


      return this.http.post('http://localhost:3000/register', user, {headers: headers})
        .pipe(map((res) => res))
      // .subscribe((result => result =result.json()));

    }
  }

