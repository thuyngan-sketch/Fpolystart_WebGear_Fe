import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  product = {
    productName: '',
    price:'',
    view:'',
    quantity:'',
    weight:'',
    size:'',
    led:'Có',
    batteryCapacity:'',
    category: 'chuột',
    description: '',
    image: ''  // Lưu trữ ảnh sản phẩm
  };
  
  constructor(private productService: ProductService) {}
  // Hàm xử lý ảnh khi người dùng chọn
  previewImage(event: any) {
      const image = document.getElementById('productImage') as HTMLImageElement;
      const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;
    
      image.src = URL.createObjectURL(event.target.files[0]);
      image.style.display = 'block';
      defaultIcon.style.display = 'none';
    }

  // Hàm xử lý submit form
  onSubmit() {
    // Kiểm tra xem tất cả các trường có được điền đầy đủ không
    if (this.product.productName && this.product.price && this.product.view && this.product.quantity&& this.product.weight&& this.product.batteryCapacity&& this.product.category&& this.product.description) {
      // Gọi phương thức trong ProductService để gửi sản phẩm
      this.productService.createProduct(this.product).subscribe(
        (response) => {
          console.log('Sản phẩm đã được thêm:', response);
          alert('Sản phẩm đã được thêm thành công!');
        },
        (error) => {
          console.error('Có lỗi xảy ra khi thêm sản phẩm', error);
          alert('Có lỗi xảy ra!');
        }
      );
    } else {
      alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
    }
  }
  
  

  @Input() showModal: boolean = false;
@Output() close = new EventEmitter<void>(); 
closeModal() {
  this.close.emit();
}
onOverlayClick(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
    this.closeModal(); 
  }
}
}




// product = {
//   name: '',
//   category: 'chuột',
//   color:'',
//   Connectivity :'',
//   Dimensions :'',
//   Material :'',
//   EyeReading :'',
//   Button :'',
//   SS :'',
//   quantity: null,
//   dpi: null,
//   connection: '',
//   material: '',
//   frequency: null,
//   buttonCount: null,
//   batteryCapacity: '',
//   led: 'Có',
//   Layout: '',
//   Case: '',
//   Switch :'',
//   SwitchLife :'',
//   KeycapMaterial :'',
//   SwitchMaterial:'',
//   Stabilizes :'',
//   PCB:'',
//   description: ''
// };

// previewImage(event: any) {
//   const image = document.getElementById('productImage') as HTMLImageElement;
//   const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

//   image.src = URL.createObjectURL(event.target.files[0]);
//   image.style.display = 'block';
//   defaultIcon.style.display = 'none';
// }

// saveProduct() {
//   alert('Sản phẩm mới đã được thêm!');

// }

// cancelAddProduct() {
//   const confirmation = confirm("Bạn có chắc chắn muốn hủy thêm sản phẩm không?");
//   if (confirmation) {

//       window.location.href = 'products'; 
//   }
// }
// @Input() showModal: boolean = false;
// @Output() close = new EventEmitter<void>(); 

// closeModal() {
//   this.close.emit();
// }
// onOverlayClick(event: MouseEvent) {
//   if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
//     this.closeModal(); 
//   }
// }
