import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Products[]>(this.baseUrl);
  }
  getProductById(id: number) {
    return this.http.get<Products>(this.baseUrl + '/' + id);
  }
  createProduct(_data: Products) {
    return this.http.post(this.baseUrl, _data);
  }
  updateProduct(_data: Products) {
    return this.http.patch(this.baseUrl + '/' + _data.id, _data);
  }
  removeProduct(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
