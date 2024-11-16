import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any;  // Biến lưu thông tin sản phẩm
  productId: number = 0; // ID sản phẩm sẽ được lấy từ URL

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Lấy ID sản phẩm từ URL (ví dụ: /product/:id)
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id')); // Chuyển id thành kiểu số
      this.loadProductDetail();
    });
  }

  // Gọi API để lấy thông tin chi tiết sản phẩm
  loadProductDetail(): void {
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data; // Lưu dữ liệu sản phẩm vào biến
      },
      (error) => {
        console.error('Có lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    );
  }
  
}
