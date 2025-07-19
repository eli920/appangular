import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCart } from '../product-cart';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})

export class Cart {
  cartList$: Observable <Product[]>

  constructor(private cart: ProductCart){
    this.cartList$ = cart.cartList.asObservable();
  }
}
