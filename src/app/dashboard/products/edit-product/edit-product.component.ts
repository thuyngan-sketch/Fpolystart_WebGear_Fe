import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
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
    image: ''  
  };

previewImage(event: any) {
    const image = document.getElementById('productImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    defaultIcon.style.display = 'none';
}

saveProduct() {
    alert('Sản phẩm đã được cập nhật!');
 
}

cancelEditProduct() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy chỉnh sửa sản phẩm không?");
    if (confirmation) {

        window.location.href = 'products'; 
    }
}

loadProductData() {
    const productId = this.getProductId(); 
    const product = this.getProductById(productId);
 
    const image = document.getElementById('productImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    if (product.image) {
        image.src = product.image;
        image.style.display = 'block';
        defaultIcon.style.display = 'none';
    }
}

getProductId() {

    return 0;
}

getProductById(productId: number) {

    return {
        name: 'Chuột Gaming',
        category: 'chuột',
        quantity: 10,
        dpi: 1600,
        connection: 'USB',
        material: 'Nhựa',
        frequency: 1000,
        buttonCount: 6,
        batteryCapacity: 'Không',
        led: 'Có',
        switchType: 'Mechanical',
        description: 'Mô tả sản phẩm',
        image: ''
    };
}

ngOnInit() {
    this.loadProductData();
}
@Input() showModal: boolean = false;
  @Output() close = new EventEmitter<void>(); 

  closeModal() {
    this.close.emit(); 
  }

  
  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal(); // Đóng modal khi click vào overlay
    }
  }
  
}
