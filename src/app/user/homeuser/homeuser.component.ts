import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductUser, ProductUserService } from 'src/app/service/product-user.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
//   animations: [
//     trigger('focus', [
//       state('normal', style({
//         borderColor: '#ddd',
//         boxShadow: 'none'
//       })),
//       state('focused', style({
//         borderColor: '#4CAF50',
//         boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)'
//       })),
//       transition('normal <=> focused', [
//         animate('0.3s ease-in-out')
//       ])
//     ])
//   ]
 })

export class HomeuserComponent  implements OnInit{
 
  // products = [
  //   { id: 1,img:'', name: 'Product 1', price: 180.85 },
  //   { id: 2, name: 'Product 2', price: 190.85 },
  //   { id: 3, name: 'Product 3', price: 160.85 },
  //   { id: 4, name: 'Product 4', price: 160.85 },
  //   { id: 5, name: 'Product 5', price: 150.85 },
  //   { id: 6, name: 'Product 6', price: 140.85 },
  //   { id: 7, name: 'Product 7', price: 220.85 },
  //   { id: 8, name: 'Product 8', price: 250.85 },
  //   { id: 9, name: 'Product 9', price: 160.85 },
  //   { id: 10, name: 'Product 10', price: 150.85 },
  //   { id: 11, name: 'Product 11', price: 140.85 },
  //   { id: 12, name: 'Product 12', price: 220.85 },
  //   { id: 13, name: 'Product 13', price: 250.85 }
  // ];

  // currentIndex = 0;
  // itemsPerPage = 4;  // Mỗi lần hiển thị 4 sản phẩm

  // // Lấy sản phẩm cần hiển thị (luôn luôn hiển thị 4 sản phẩm)
  // get visibleProducts() {
  //   return this.products.slice(this.currentIndex, this.currentIndex + 13);
  // }

  // // Di chuyển các sản phẩm khi nhấn nút "next" hoặc "prev"
  // move(direction: string) {
  //   const totalProducts = this.products.length;

  //   if (direction === 'next') {
  //     if (this.currentIndex + this.itemsPerPage < totalProducts) {
  //       this.currentIndex++;
  //     }
  //   } else if (direction === 'prev') {
  //     if (this.currentIndex > 0) {
  //       this.currentIndex--;
  //     }
  //   }
  // }

   isFocused = false;

   onFocus() {
     this.isFocused = true;
   }

   onBlur() {
    this.isFocused = false;
   }

   products: ProductUser[] = [];  // Mảng chứa danh sách sản phẩm
   currentIndex: number = 0;  // Chỉ mục hiện tại của danh sách sản phẩm
 
   constructor(private productService: ProductUserService) {}
 
   ngOnInit(): void {
     // Gọi service để lấy danh sách sản phẩm
     this.productService.getProducts().subscribe(
       (response: ProductUser[]) => {
         this.products = response.map(product => ({
           ...product,
           showCart: false  // Thêm thuộc tính `showCart` để điều khiển việc hiển thị icon giỏ hàng
         }));
       },
       (error) => {
         console.error('Lỗi khi lấy danh sách sản phẩm', error);
       }
     );
   }
 
   // Di chuyển sang sản phẩm trước đó
   prevSlide(): void {
     if (this.currentIndex > 0) {
       this.currentIndex -= 4;
     }
   }
 
   // Di chuyển sang sản phẩm tiếp theo
   nextSlide(): void {
     if (this.currentIndex + 4 < this.products.length) {
       this.currentIndex += 4;
     }
   }
 
   // Hiển thị icon giỏ hàng khi di chuột vào ảnh sản phẩm
   showCartIcon(product: ProductUser): void {
     product.showCart = true;
   }
 
   // Ẩn icon giỏ hàng khi di chuột ra khỏi ảnh sản phẩm
   hideCartIcon(): void {
     this.products.forEach(product => product.showCart = false);
   }
 }

