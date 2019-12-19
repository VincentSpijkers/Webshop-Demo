import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {AuthorizationService} from '../shared/authorization.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService, private auth: AuthorizationService) { }

  public login(username: string, password: string) {
    console.log('log in');
    this.auth.setHeader(username, password);
    this.apiService.get('/api/token').subscribe(data => {
      console.log(data)
      // @ts-ignore
      const user = new User(data.username, data.id);
      AuthorizationService.user = user;
      // @ts-ignore
      localStorage.setItem('token', data.token);
    });
  }
}
