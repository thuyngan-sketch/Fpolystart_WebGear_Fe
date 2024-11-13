import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // Danh sách sản phẩm
  products = [
    { id: 1, name: 'Product 1', price: 180.85 },
    { id: 2, name: 'Product 2', price: 190.85 },
    { id: 3, name: 'Product 3', price: 160.85 },
    { id: 4, name: 'Product 4', price: 160.85 },
    { id: 5, name: 'Product 5', price: 150.85 },
    { id: 6, name: 'Product 6', price: 140.85 },
    { id: 7, name: 'Product 7', price: 220.85 },
    { id: 8, name: 'Product 8', price: 250.85 },
    { id: 9, name: 'Product 9', price: 160.85 },
    { id: 10, name: 'Product 10', price: 150.85 },
    { id: 11, name: 'Product 11', price: 140.85 },
    { id: 12, name: 'Product 12', price: 220.85 },
    { id: 13, name: 'Product 13', price: 250.85 }
  ];

  currentIndex = 0;
  itemsPerPage = 4;  // Mỗi lần hiển thị 4 sản phẩm

  // Lấy sản phẩm cần hiển thị (luôn luôn hiển thị 4 sản phẩm)
  get visibleProducts() {
    return this.products.slice(this.currentIndex, this.currentIndex + 13);
  }

  // Di chuyển các sản phẩm khi nhấn nút "next" hoặc "prev"
  move(direction: string) {
    const totalProducts = this.products.length;

    if (direction === 'next') {
      if (this.currentIndex + this.itemsPerPage < totalProducts) {
        this.currentIndex++;
      }
    } else if (direction === 'prev') {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
}
