import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Định nghĩa interface cho cấu trúc sản phẩm
export interface ProductUser {
  color: string;
  layout: string;
  case: string;
  switch: string;
  switchLife: number;
  led: string;
  keycapMaterial: string;
  switchMaterial: string;
  ss: string;
  stabilizes: string;
  pcb: string;
  imageProduct: string[];  // Assuming it's an array of image URLs
  name: string;            // Name of the product
  price: number; 
  showCart?: boolean;          // Price of the product
}

@Injectable({
  providedIn: 'root'
})
export class ProductUserService {

  private apiUrl = 'https://localhost:7249/api/admin/KeyBoard/get-all';  // URL API

  constructor(private http: HttpClient) {}

  // Lấy danh sách sản phẩm từ API và trả về dưới dạng Observable<ProductUser[]>
  getProducts(): Observable<ProductUser[]> {
    return this.http.get<ProductUser[]>(this.apiUrl);
  }
}
