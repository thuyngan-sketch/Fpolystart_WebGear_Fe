import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  searchTerm: string = ''; // Biến để nhập từ khóa tìm kiếm
  orders: any[] = []; // Danh sách đơn hàng từ API
  filteredOrders: any[] = []; // Danh sách đã lọc dựa trên tìm kiếm
  showModalEdit: boolean = false; // Điều khiển hiển thị modal chỉnh sửa
  order: any = {};  // Đơn hàng hiện tại cần chỉnh sửa
  showModalDetail: boolean = false;
  selectedOrderId: string = '';
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.fetchOrders(); // Lấy dữ liệu từ API khi component khởi tạo
  }

  // Lấy danh sách đơn hàng
  fetchOrders() {
    this.orderService.getAllOrder().subscribe(
      (data) => {
        this.orders = data;
        this.filteredOrders = this.orders;
      },
      (error) => {
        console.error('Lỗi khi lấy đơn hàng:', error);
      }
    );
  }

  // Tìm kiếm đơn hàng
  filterOrders() {
    const term = this.searchTerm.toLowerCase();
    this.filteredOrders = this.orders.filter(order =>
      order.customerName.toLowerCase().includes(term) ||
      order.product.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term)
    );
  }

  // Mở modal chỉnh sửa đơn hàng
  editOrder(orderId: string) {
    this.order = this.orders.find(order => order.id === orderId); // Lấy đơn hàng theo ID
    if (this.order) {
      this.showModalEdit = true; // Mở modal chỉnh sửa
    }
  }

  // Đóng modal chỉnh sửa
  closeModalEdit() {
    this.showModalEdit = false;
  }

  // Lưu đơn hàng sau khi chỉnh sửa
  saveOrder() {
    if (this.order) {
      this.orderService.updateOrder(this.order.id, this.order).subscribe(
        (data) => {
          alert('Cập nhật đơn hàng thành công!');
          this.closeModalEdit();
          this.fetchOrders(); // Lấy lại danh sách đơn hàng sau khi cập nhật
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
    }
  }

  // Hàm để hiển thị trạng thái đơn hàng
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
  // Khi nhấn vào nút chỉnh sửa, mở modal và load dữ liệu của đơn hàng vào modal
 
  openOrderDetailModal(orderId: string): void {
    this.selectedOrderId = orderId;
    this.showModalDetail = true;
  }

  // Đóng modal chi tiết đơn hàng
  closeOrderDetailModal(): void {
    this.showModalDetail = false;
  }
  // Mở modal chỉnh sửa đơn hàng
  openEditOrderModal(orderId: string): void {
    this.selectedOrderId = orderId;
    this.showModalEdit = true;
  }

  // Đóng modal chỉnh sửa
  closeEditModal(): void {
    this.showModalEdit = false;
  }
}