import {Component} from '@angular/core';
import {AuthService} from '../components/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public headerService: AuthService) {
  }
}
