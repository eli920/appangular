// Servicios
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://666c8e3949dbc5d7145e6b07.mockapi.io/api/Stock-Carpentry-Products'

@Injectable({
  providedIn: 'root'
})

export class ProductData {

  constructor(private http: HttpClient) { }

  //Consumo la api y devuelvo un abservable

  //Me traigo todos los productos
  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) => products.forEach(product => product.quantity = 0))
      );
  }

  //Agrego un producto
  public postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(URL, product);
  }

  //Actualizo
  public updateProduct(id: string, updatedData: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${URL}/${id}`, updatedData);
  }
}
