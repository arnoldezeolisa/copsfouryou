import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FeedComponent} from './components/feed/feed.component';
import {FeedmoduleComponent} from './components/feedmodule/feedmodule.component'
import {ProfileComponent} from './components/profile/profile.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

const authRoutes: Routes = [
  { path: 'signup', component:  SignUpComponent},
  { path: 'signin', component:  SignInComponent},
  { path: 'feed', component:    FeedComponent}

];

const usrRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    RouterModule.forChild(authRoutes),
    RouterModule.forChild(usrRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
