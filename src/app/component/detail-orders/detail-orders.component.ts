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
}