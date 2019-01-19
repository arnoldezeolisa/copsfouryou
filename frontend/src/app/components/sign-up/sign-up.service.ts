import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SignUpService {
  token: string;
  constructor(private router: Router,
              private http: HttpClient) {
  }


  SignupUser(email: string, password: string) {
    var user = {email: email, password: password};

      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json; charset=utf-8');
      console.log("user data in auth module " + JSON.stringify(user) )
      this.token = password;


      return this.http.post('http://localhost:8080/register',
        user, {headers: headers})
        .pipe(map((res) => res))
      // .subscribe((result => result =result.json()));

    }

    getToken() {
      return this.token;
    }

  isSuccess() {
    return this.token != null;
  }

  onLogout() {
    this.token = null;
  }



  /*
    logout() {
  firebase.auth().signOut();
  this.token = null;
}

getToken() {
  firebase.auth().currentUser.getToken()
    .then(
      (token: string) => this.token = token
    );
  return this.token;
}

isAuthenticated() {
  return this.token != null;
}
   */
  }

