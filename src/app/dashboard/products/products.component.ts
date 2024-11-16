import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any = { Keyboards: [], Mice: [] }; // Lưu kết quả từ 2 API

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    const keyboardRequest = { page: 1 };  // Tham số cho API bàn phím
    const mouseRequest = { page: 1 };    // Tham số cho API chuột

    // Gọi API đồng thời để lấy danh sách bàn phím và chuột
    this.productService.getAllProducts(keyboardRequest, mouseRequest).subscribe({
      next: (results) => {
        this.products.Keyboards = results[0]; // Kết quả từ API bàn phím
        this.products.Mice = results[1];      // Kết quả từ API chuột
      },
      error: (err) => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', err);
      }
    });
  }
  showProduct(product: any) {
    alert(`Hiện thông tin sản phẩm: ${product.name}`);
}

editProduct(id: number) {
    window.location.href = 'edit-product/:id';
}

showModal: boolean = false; // Điều khiển trạng thái hiển thị modal

  // Mở modal khi nhấn nút "Thêm"
  openModal() {
    this.showModal = true;
  }

  // Đóng modal
  closeModal() {
    this.showModal = false;
  }
}



