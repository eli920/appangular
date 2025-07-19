import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCart {
 private _cartList: Product[] = [];

 cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(product:Product) {
    let item: Product | undefined= this._cartList.find((v1) => v1.name ==product.name);

    if(!item){
      this._cartList.push({... product});
    }else{
      item.quantity += product.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
