import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

const authRoutes: Routes = [
  { path: 'signup', component:  SignUpComponent},
  { path: 'signin', component:  SignInComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
