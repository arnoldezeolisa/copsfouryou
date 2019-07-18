import { Injectable } from '@angular/core';
import { Profile } from "./profile.model";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileChanged = new Subject<Profile[]>();
  startedEditing = new Subject<number>();
  private profiles: Profile[] = [
    new Profile('Welcome to Arnolds Page', 26),

  ];

  getProfiles() {
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
