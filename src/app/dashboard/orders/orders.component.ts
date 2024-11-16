import { Component, OnInit } from '@angular/core'
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

  constructor(private orderService: OrderService) {} // Inject OrderService

  ngOnInit() {
    this.fetchOrders(); // Lấy dữ liệu từ API khi component khởi tạo
  }

  // Hàm gọi API lấy danh sách đơn hàng
  fetchOrders() {
    this.orderService.getAllOrder().subscribe(
      (data) => {
        this.orders = data; // Gán dữ liệu vào danh sách đơn hàng
        this.filteredOrders = this.orders; // Sao chép để hiển thị danh sách ban đầu
      },
      (error) => {
        console.error('Lỗi khi lấy đơn hàng:', error); // Xử lý lỗi (nếu có)
      }
    );
  }

  // Hàm tìm kiếm đơn hàng
  filterOrders() {
    const term = this.searchTerm.toLowerCase();
    this.filteredOrders = this.orders.filter(order => 
      order.customerName.toLowerCase().includes(term) ||
      order.product.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term)
    );
  }

  // Hàm xem chi tiết đơn hàng
  viewOrder(orderId: string) {
    console.log('Xem đơn hàng:', orderId);
    // Bạn có thể điều hướng đến trang chi tiết nếu cần
    // this.router.navigate(['/orders', orderId]);
  }

  // Hàm chỉnh sửa đơn hàng
  editOrder(orderId: string) {
    console.log('Chỉnh sửa đơn hàng:', orderId);
    // Điều hướng đến trang chỉnh sửa nếu cần
    // this.router.navigate(['/orders/edit', orderId]);
  }


  getStatusLabel(status: number): string {
    switch (status) {
      case 1:
        return 'Chờ xử lý'
      case 2:
        return 'Xác nhận'
      case 3:
        return 'Đang xử lý'
      case 4: 
        return 'Đang giao cho đơn vị vận chuyển'
      case 5: 
        return 'Đang giao'
      case 6: 
        return 'Đã giao'
      case 7: 
        return 'Đơn bị huỷ'
      case 8: 
        return 'Đơn Hoàn'
      case 9: 
        return 'Đã hoàn tiền'
      default:
        return 'Không xác định'
    }
  }
}