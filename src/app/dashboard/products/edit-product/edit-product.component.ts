import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product = {
    name: '',
    category: 'chuột',
    quantity: null as number | null,
    dpi: null as number | null,
    connection: '',
    material: '',
    frequency: null as number | null,
    buttonCount: null as number | null,
    batteryCapacity: '',
    led: 'Có',
    switchType: '',
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
    // Logic để lưu sản phẩm
}

cancelEditProduct() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy chỉnh sửa sản phẩm không?");
    if (confirmation) {
        // Logic để điều hướng về trang quản lý sản phẩm
        window.location.href = 'products'; 
    }
}

loadProductData() {
    const productId = this.getProductId(); 
    const product = this.getProductById(productId); // Giả sử bạn có hàm này để lấy thông tin sản phẩm

    this.product = product; // Gán dữ liệu sản phẩm vào biến product
    const image = document.getElementById('productImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    if (product.image) {
        image.src = product.image;
        image.style.display = 'block';
        defaultIcon.style.display = 'none';
    }
}

getProductId() {
    // Logic để lấy ID sản phẩm từ URL hoặc từ nơi khác
    return 0; // Ví dụ, trả về ID sản phẩm đầu tiên
}

getProductById(productId: number) {
    // Logic để lấy thông tin sản phẩm từ danh sách sản phẩm
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
        image: '' // Đường dẫn đến ảnh sản phẩm
    };
}

ngOnInit() {
    this.loadProductData();
}
}
