import {Component} from '@angular/core';
import {SignUpService} from '../components/sign-up/sign-up.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public signupService: SignUpService) {
  }
}
