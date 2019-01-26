import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FeedComponent} from './components/feed/feed.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CopDashboardComponent} from './components/cop-dashboard/cop-dashboard.component';
import {MessagesComponent} from './components/messages/messages.component';
import {PostJobComponent} from './components/post-job/post-job.component';
import {NotificationComponent} from './components/notification/notification.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

const authRoutes: Routes = [
  { path: 'signup', component:  SignUpComponent},
  { path: 'signin', component:  SignInComponent},

];

const usrRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'usrDashboard', component: CopDashboardComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'postJob', component: PostJobComponent}
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
