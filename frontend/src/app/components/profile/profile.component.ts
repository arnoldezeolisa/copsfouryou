import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { Profile } from "./profile.model";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  profiles: Profile[];
  private subscription: Subscription;
  private firstName: String;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadAllProfileData();
    /*
     this.profiles = this.profielService.getProfiles();
     this.subscription = this.profileService.profileChanged
       .subscribe(
         (ingredients: Profile[]) => {
           this.profiles = ingredients;
         }
       );*/
  }

  loadAllProfileData() {
    this.profileService.loadAllProfileData().subscribe(data => {
      console.log("profile data: ", data);

      this.firstName = data["firstName"];
    });
  }

  onEditItem(index: number) {
    this.profileService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
