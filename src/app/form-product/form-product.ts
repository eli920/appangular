import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductData } from '../product-data';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-form-product',
  standalone: false,
  templateUrl: './form-product.html',
  styleUrls: ['./form-product.scss']
})

export class FormProduct {
   @Output() formSubmitted = new EventEmitter();
    
    formProduct = new FormGroup({
      image: new FormControl("/assets/img/new-product.jpg"),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0.01, [Validators.required, Validators.min(0.01)]),
      stock: new FormControl(0, [Validators.required, Validators.min(0)]),
      offer: new FormControl(false),
    });

  constructor(private productData: ProductData) {}

   onSubmit() {
    if (this.formProduct.valid) {
      const newProduct = this.formProduct.value as Product;

      this.productData.postProduct(newProduct).subscribe({
        next: (productoCreado) => {
          console.log('Producto creado:', productoCreado);
          this.formSubmitted.emit(productoCreado); // notifica al padre
          this.formProduct.reset({
            image: '/assets/img/new-product.jpg',
            name: '',
            description: '',
            price: 0.01,
            stock: 0,
            offer: false,
          });
        },
        error: (err) => {
          console.error('Error al crear producto:', err);
        }
      });
    }
  }
}



