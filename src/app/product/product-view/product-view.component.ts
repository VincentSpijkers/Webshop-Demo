import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  @Input() productType: string;

  private products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchAllProducts();
  }

  private fetchAllProducts() {
    this.productService.fetchAll().subscribe(data =>{
      this.products = [];
      for (const product of data.data) {
        this.products.push(
          new Product(product.product_name, product.product_id, product.product_image_url, product.product_description, product.product_price, (product.is_liked === 'true'))
        );
      }
    });
  }
}
