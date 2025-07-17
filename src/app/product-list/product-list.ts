import { Component } from '@angular/core';
import { Product } from './Product'

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})

export class ProductList {

   products: Product [] = [
      {   
      image: "assets/img/banco.jpeg",
      name: "Banco de dos Cuerpos",
      description: "Varillas recuperadas de Lapacho",
      price: 170000,
      stock: 0,
      offer: false,
      quantity: 0,
      },

    { 
      image: "assets/img/mesa.jpg",
      name: "Mesa Ratona",
      description: "Lapacho recuperado- 90 x 45 x 45 cm",
      price: 300000,
      stock: 6,
      offer: false,
      quantity: 0,
    },

    { 
      image: "assets/img/silla.jpg",
      name: "Silla Jesuita",
      description: "Varillas recuperadas de Lapacho/Quebracho",
      price: 50000,
      stock: 20,
      offer: true,
      quantity: 0,
    }
  ]
  
  constructor () {}

  // ngOnInit(): void {

  // }

  upQuantity(product: Product): void {
    if(product.quantity < product.stock)
     product.quantity++;
  }

   downQuantity(product: Product): void {
    if(product.quantity > 0)
      product.quantity--;
  }

  
  changeQuantity(event: Event, product: Product): void {
  const input = event.target as HTMLInputElement;
  const value = input.value.trim();

  // Validar si es número
  const quantity = Number(value);

      if (isNaN(quantity)) {
        product.quantity = 0;
        input.value = '0';
        return;
      }

      if (quantity < 0) {
        product.quantity = 0;
        input.value = '0';
      } else if (quantity > product.stock) {
        product.quantity = product.stock;
        input.value = product.stock.toString();
      } else {
        product.quantity = quantity;
      }
  }
}

