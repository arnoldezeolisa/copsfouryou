import {Component} from '@angular/core';
import {AuthService} from '../components/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService,
              private router: Router) {
  }

  Logout(){
    this.authService.Logout()
    this.router.navigate(["/"])
  }
}
