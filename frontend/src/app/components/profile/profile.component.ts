 import { Component, OnInit, OnDestroy } from '@angular/core';
 import { Subscription } from 'rxjs/Subscription';

 import { Profile } from "./profile.model";
 import {ProfileService } from "./profile.service";

 @Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
   profiles: Profile[];
   private subscription: Subscription;

  constructor(private  prService: ProfileService) { }

   ngOnInit() {
     this.profiles = this.prService.getProfiles();
     this.subscription = this.prService.profileChanged
       .subscribe(
         (ingredients: Profile[]) => {
           this.profiles = ingredients;
         }
       );
   }


 onEditItem(index: number) {
   this.prService.startedEditing.next(index);
 }

 ngOnDestroy() {
   this.subscription.unsubscribe();
 }
 }
