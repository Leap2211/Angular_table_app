import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${baseUrl}/product`)
  }

  //GET BY ID 

  getById(id: any): Observable<Product>{

    
    return this.http.get<Product>(`${baseUrl}/product/${id}`)
  }

  //ADD NEW PRODUCT 

  createProduct(data: Product): Observable<Product>{

    const numID = String(data.id);

    const newProduct = {
      id: numID,
      name: data.name,
      image: data.image,
      category: data.category,
      quantity: data.quantity,
      price: data.price,
      status: data.status,
    }

    return this.http.post<Product>(`${baseUrl}/product`, newProduct)
  }

  //UPDATE PRODUCT

  updateProduct(id: any, data: Product): Observable<Product>{
    return this.http.put<Product>(`${baseUrl}/product/${id}`, data);
  }

  deleteProduct(id: any): Observable<Product>{
    console.log(id);
    
    return this.http.delete<Product>(`${baseUrl}/product/${id}`);
  }
}
