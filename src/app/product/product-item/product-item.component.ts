import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {}

  private addtoFavorite() {
    const data = {'productId': this.product.id};

    if (this.product.isLiked) {
        this.product.isLiked = false;
        this.productService.removeFromFavorite(data);
    } else {
      this.product.isLiked = true;
      this.productService.addToFavorite(data);
    }
  }

}
