import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
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

  /* signinUser(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)<- see if user name and pass in database
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then(
            (token: string) => this.token = token
          )
      }
    )
    .catch(
      error => console.log(error)
    );
}*/


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

