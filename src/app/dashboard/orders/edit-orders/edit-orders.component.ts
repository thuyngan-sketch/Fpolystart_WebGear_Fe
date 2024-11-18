import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent  implements OnInit {
  
  @Input() showModalEdit: boolean = false; // Điều kiện mở modal
  @Input() orderId: string = ''; // ID của đơn hàng cần chỉnh sửa
  @Output() close = new EventEmitter<void>(); // EventEmitter để đóng modal

  order: any = {
    userID: '',
    totalQuantity: 0,
    totalPrice: 0,
    paymentMethod: '',
    status: 1,
    orderDate: ''
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    if (this.orderId) {
      this.loadOrderDetails(this.orderId); // Nếu có orderId, tải chi tiết đơn hàng
    }
  }

  // Lấy thông tin chi tiết đơn hàng từ API
  loadOrderDetails(orderId: string): void {
    this.orderService.getOrderById(orderId).subscribe(
      (data) => {
        this.order = data; // Lưu dữ liệu đơn hàng vào biến order
      },
      (error) => {
        console.error('Lỗi khi lấy thông tin đơn hàng:', error);
      }
    );
  }

  // Lưu thông tin đơn hàng đã chỉnh sửa
  saveOrder(): void {
    if (this.orderId) {
      this.orderService.updateOrder(this.orderId, this.order).subscribe(
        (response) => {
          console.log('Đơn hàng đã được cập nhật', response);
          this.closeModal(); // Đóng modal sau khi cập nhật thành công
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
    }
  }

  // Đóng modal
  closeModal(): void {
    this.close.emit(); // Gửi sự kiện đóng modal
  }

  // Ngừng sự kiện khi click vào overlay
  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal(); // Đóng modal khi click ra ngoài
    }
  }
}
