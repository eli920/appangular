import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { CarpentryAbout } from './carpentry-about/carpentry-about';
import { CarpentryProducts } from './carpentry-products/carpentry-products';
import { Cart } from './cart/cart';
import { InputNumber } from './input-number/input-number';

@NgModule({
  declarations: [
    App,
    ProductList,
    CarpentryAbout,
    CarpentryProducts,
    Cart,
    InputNumber
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
