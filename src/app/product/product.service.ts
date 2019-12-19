import { Injectable } from '@angular/core';
import {AuthorizationService} from '../shared/authorization.service';
import {ApiService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private auth: AuthorizationService, private apiService: ApiService) { }

  fetchAll(): any {
    return this.apiService.get('/api/product/all');
  }


  addToFavorite(likedData: object) {
    this.apiService.post('/api/product/like', likedData).subscribe();
  }


  isLiked(id: number) {
    return this.apiService.get('/api/product/liked/' + id);
  }

  // post because http delete does not support body data and a header so cant force user login
  removeFromFavorite(likedData: object) {
    console.log(likedData);
    this.apiService.post('/api/product/delete/liked', likedData).subscribe();
  }
}
