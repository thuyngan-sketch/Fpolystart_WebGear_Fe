import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
//   products: any = { Keyboards: [], Mice: [] };

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.loadProducts();
//   }

//   loadProducts() {
//     const keyboardRequest = { page: 1 };  
//     const mouseRequest = { page: 1 };    

    
//     this.productService.getAllProducts(keyboardRequest, mouseRequest).subscribe({
//       next: (results) => {
//         this.products.Keyboards = results[0]; 
//         this.products.Mice = results[1];      
//       },
//       error: (err) => {
//         console.error('Có lỗi xảy ra khi lấy dữ liệu:', err);
//       }
//     });
//   }
//   
products: any[] = []; 

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
  
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Lỗi khi gọi API:', error); 
      }
    );
  }
  viewProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
    
    editProduct(id: number) {
        window.location.href = 'edit-product/:id';
    }
showModalAdd: boolean = false;
showModalEdit: boolean = false;

  openModalAdd() {
    this.showModalAdd = true;
  }

  openModalEdit() {
    this.showModalEdit = true;
  }
  
  closeModalAdd() {
    this.showModalAdd = false;
  }
  closeModalEdit() {
    this.showModalEdit = false;
  }
  
}



