import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //ADD HTTP CLIENT TO APP MODULE IMPORTS
  constructor(private http: HttpClient) {

  }

  public get<Any>(uri: string) {
    const header = AuthorizationService.header;
    return this.http.get<Any>(uri, {headers: header});
  }

  // tslint:disable-next-line:ban-types
  public post<Any>(uri: string, data: Object) {
    const header = AuthorizationService.header;
    return this.http.post(uri, data, {headers: header});
  }

  // tslint:disable-next-line:ban-types
  public delete<Any>(uri: string, data: Object){
    const header = AuthorizationService.header;
    return this.http.delete(uri, data);
  }
}
