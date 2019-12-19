import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  get username() {
    if (AuthorizationService.user) {
      return AuthorizationService.user.username;
    }
  }
}
