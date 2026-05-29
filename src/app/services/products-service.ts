import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResults } from '../models/products-results';
import { ProductDetail } from '../models/ProductDetail';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http:HttpClient){}

  private cart: ProductDetail[] = []

  getAll()
  {
    return this.http.get<ProductsResults>('https://dummyjson.com/products/category/smartphones?select=title,price,thumbnail')
  }

  getOne(id:number): Observable<ProductDetail>
  {
    return this.http.get<ProductDetail>(`https://dummyjson.com/products/${id}?select=title,price,thumbnail,images,reviews`)
  }

  addToCart(p:ProductDetail)
  {
    this.cart.push(p)  
  }

  getCartCount()
  {
    return this.cart.length
  }

  getAllCart()
  {
    return this.cart
  }

}
