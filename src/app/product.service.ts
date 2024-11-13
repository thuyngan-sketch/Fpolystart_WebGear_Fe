import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private apiUrl = 'https://localhost:7249/api/admin/product';  // URL của API C#

  // constructor(private http: HttpClient) { }

  // // Lấy danh sách sản phẩm
  // getAllProducts(request?: any): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/get-all`, { params: request });
  // }

  // // Lấy sản phẩm theo ID
  // getProductById(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/get-by-id`, { params: { id: id.toString() } });
  // }

  // // Tạo mới sản phẩm
  // createProduct(request: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/create`, request);
  // }

  // // Cập nhật sản phẩm
  // updateProduct(id: number, request: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/update`, { id, ...request });
  // }

  // // Xóa sản phẩm
  // deleteProduct(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/delete`, { params: { id: id.toString() } });
  // }
  private apiUrlKeyboards = 'https://localhost:7249/api/admin/KeyBoard/get-all'; // API bàn phím
  private apiUrlMice = 'https://localhost:7249/api/admin/Mouse/get-all'; // API chuột

  constructor(private http: HttpClient) {}

  // Phương thức gọi đồng thời 2 API để lấy danh sách bàn phím và chuột
  getAllProducts(keyboardRequest: any, mouseRequest: any): Observable<any> {
    let keyboardParams = new HttpParams();
    if (keyboardRequest) {
      keyboardParams = keyboardParams.append('keyboardRequest.page', keyboardRequest.page);
    }

    let mouseParams = new HttpParams();
    if (mouseRequest) {
      mouseParams = mouseParams.append('mouseRequest.page', mouseRequest.page);
    }

    // Gọi cả 2 API đồng thời và kết hợp kết quả với forkJoin
    const keyboardsRequest = this.http.get<any>(this.apiUrlKeyboards, { params: keyboardParams });
    const miceRequest = this.http.get<any>(this.apiUrlMice, { params: mouseParams });

    // Sử dụng forkJoin để gọi đồng thời và trả kết quả
    return forkJoin([keyboardsRequest, miceRequest]);
  }
}

