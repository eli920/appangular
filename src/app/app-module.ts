import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './product-list/product-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarpentryAbout } from './carpentry-about/carpentry-about';
import { CarpentryProducts } from './carpentry-products/carpentry-products';
import { Cart } from './cart/cart';
import { InputNumber } from './input-number/input-number';
import { HttpClientModule } from '@angular/common/http';
import { FormProduct } from './form-product/form-product';


@NgModule({
  declarations: [
    App,
    ProductList,
    CarpentryAbout,
    CarpentryProducts,
    Cart,
    InputNumber,
    FormProduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
