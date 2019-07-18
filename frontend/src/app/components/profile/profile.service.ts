import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  profileChanged = new Subject<Profile[]>();
  startedEditing = new Subject<number>();
  private profiles: Profile[] = [new Profile("Welcome to Arnolds Page", 26)];

  loadAllProfileData() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    let user = "test";
    return this.http
      .post("http://localhost:8080/profile", user, { headers: headers })
      .pipe(map(res => res));
  }

  getProfiles() {
    console.log("test");
    return this.profiles.slice();
  }

  getProfile(index: number) {
    return this.profiles[index];
  }

  addInfo(comment: Profile) {
    this.profiles.push(comment);
    this.profileChanged.next(this.profiles.slice());
  }

  addInfos(ingredients: Profile[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.profiles.push(...ingredients);
    this.profileChanged.next(this.profiles.slice());
  }

  updateProfile(index: number, newProfile: Profile) {
    this.profiles[index] = newProfile;
    this.profileChanged.next(this.profiles.slice());
  }

  deleteInfo(index: number) {
    this.profiles.splice(index, 1);
    this.profileChanged.next(this.profiles.slice());
  }
}
