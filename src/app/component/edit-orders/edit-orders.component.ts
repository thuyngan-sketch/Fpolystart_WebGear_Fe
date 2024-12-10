import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent {
  @Input() order: any;  // Nhận thông tin sản phẩm từ parent component (ProductComponent)
  @Input() showModalEdit: boolean = false;  // Kiểm tra modal có hiển thị không
  @Output() close = new EventEmitter<void>();  // Đóng modal khi cập nhật xong

  // Xử lý thay đổi hình ảnh
  previewImage(event: any) {
    const image = document.getElementById('productImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    defaultIcon.style.display = 'none';
  }

  // Lưu thông tin sản phẩm sau khi chỉnh sửa
  saveOrder() {
    // Gọi API hoặc xử lý lưu dữ liệu ở đây
    alert('Sản phẩm đã được cập nhật!');
    this.closeModal();  // Đóng modal sau khi lưu thành công
  }

  // Hủy chỉnh sửa và đóng modal
  cancelEditProduct() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy chỉnh sửa sản phẩm không?");
    if (confirmation) {
      this.closeModal();  // Đóng modal
    }
  }

  // Đóng modal
  closeModal() {
    this.close.emit();
  }

  // Nếu người dùng click vào overlay, modal sẽ đóng
  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}