import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  product = {
    name: '',
    category: 'chuột',
    quantity: null,
    dpi: null,
    connection: '',
    material: '',
    frequency: null,
    buttonCount: null,
    batteryCapacity: '',
    led: 'Có',
    switchType: '',
    description: ''
};

previewImage(event: any) {
    const image = document.getElementById('productImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    defaultIcon.style.display = 'none';
}

saveProduct() {
    alert('Sản phẩm mới đã được thêm!');
    // Logic để lưu sản phẩm
}

cancelAddProduct() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy thêm sản phẩm không?");
    if (confirmation) {
        // Logic để điều hướng về trang sản phẩm
        window.location.href = 'products'; 
    }
}
}
