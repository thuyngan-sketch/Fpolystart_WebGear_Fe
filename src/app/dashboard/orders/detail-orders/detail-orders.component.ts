import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-detail-orders',
  templateUrl: './detail-orders.component.html',
  styleUrls: ['./detail-orders.component.css']
})
export class DetailOrdersComponent  {
  
  @Input() order: any;  // Thông tin chi tiết sản phẩm
  @Input() showModalDetail: boolean = false; // Kiểm tra modal có hiển thị không
  @Output() close = new EventEmitter<void>(); // Đóng modal

  closeModal() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal(); // Đóng modal khi click vào overlay
    }
  }

  

  statusLabel: string = '';  // Biến mới để lưu trạng thái dạng string

  constructor(private orderService: OrderService) {}

 

  loadOrderDetails(orderId: string): void {
    this.orderService.getOrderById(orderId).subscribe(
      (data) => {
        this.order = data;  // Lưu đơn hàng vào biến
        this.statusLabel = this.getStatusLabel(this.order.status);  // Chuyển trạng thái thành nhãn
      },
      (error) => {
        console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
      }
    );
  }

  getStatusLabel(status: number): string {
    switch (status) {
      case 1: return 'Chờ xử lý';
      case 2: return 'Xác nhận';
      case 3: return 'Đang xử lý';
      case 4: return 'Đang giao';
      case 5: return 'Đã giao';
      case 6: return 'Đơn bị huỷ';
      default: return 'Không xác định';
    }
  }

 
}