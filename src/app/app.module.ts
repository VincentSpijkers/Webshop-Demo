import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LikedProductsViewComponent } from './liked-products-view/liked-products-view.component';
import {SharedModule} from './shared/shared.module';
import { HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductViewComponent,
    HomeViewComponent,
    LikedProductsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
