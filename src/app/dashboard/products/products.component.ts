import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private router: Router) {}
  products = [
    { id: 1, image: 'img1.jpg', name: 'Sản phẩm 1', type: 'Loại 1', originalPrice: 100000, discount: 20, flashSale: true },
    { id: 2, image: 'img2.jpg', name: 'Sản phẩm 2', type: 'Loại 2', originalPrice: 200000, discount: 10, flashSale: false },
];

addProduct() {
    // Logic để thêm sản phẩm mới
    window.location.href = 'app-add-products';
}

toggleFlashSale(product: any) {
    product.flashSale = !product.flashSale;
}

showProduct(product: any) {
    alert(`Hiện thông tin sản phẩm: ${product.name}`);
}

editProduct(id: number) {
    window.location.href = 'edit-product/:id';
}
}
