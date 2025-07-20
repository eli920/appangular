import { Component } from '@angular/core';
import { Product } from './Product'
import { ProductCart } from '../product-cart';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})

export class ProductList {

   products: Product [] = [];
  
  // Inyección de dependencias de servicio
  constructor (
    private cart: ProductCart,
    private productData: ProductData
   ) {}

  ngOnInit(): void {
    this.productData.getAll()
    .subscribe(products => this.products = products);
  }


  addToCart(product: Product): void {
  this.cart.addToCart(product); 
  product.stock -= product.quantity; 

  // Actualiza el stock en MockAPI
  this.productData.updateProduct(product.id!, { stock: product.stock }).subscribe({
    next: () => console.log('Stock actualizado en MockAPI'),
    error: err => console.error('Error al actualizar el stock', err)
  });

  product.quantity = 0; 
}

  maxReached(m: String){
    alert(m);
  }

  handleProductAdded(product: Product): void {
    this.products.push(product);
  }
}

