import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public static header: HttpHeaders = new HttpHeaders();
  public static isLoggedIn = false;
  public static user: User;

  public setHeader(username: string, password: string) {
    const authString = 'Basic ' + btoa(username + ':' + password);
    AuthorizationService.header = AuthorizationService.header.set('Authorization', authString);
  }

  public logout() {
    AuthorizationService.header = new HttpHeaders();
    AuthorizationService.isLoggedIn = false;
  }
}
