import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  searchTerm: string = '';
  orders: any[] = [
    { id: '001', customerName: 'Nguyễn Văn A', product: 'Chuột Gaming', status: 'Đã Giao', orderDate: new Date('2024-09-01') },
    { id: '002', customerName: 'Trần Thị B', product: 'Bàn Phím Cơ', status: 'Đang Xử Lý', orderDate: new Date('2024-09-02') },
    // Thêm các đơn hàng khác nếu cần
  ];
  filteredOrders: any[] = [];

  ngOnInit() {
    this.filteredOrders = this.orders; // Khởi tạo danh sách đơn hàng
  }

  filterOrders() {
    const term = this.searchTerm.toLowerCase();
    this.filteredOrders = this.orders.filter(order => 
      order.customerName.toLowerCase().includes(term) ||
      order.product.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term)
    );
  }

  viewOrder(orderId: string) {
    // Logic để xem chi tiết đơn hàng
    console.log('Xem đơn hàng:', orderId);
  }

  editOrder(orderId: string) {
    // Logic để chỉnh sửa đơn hàng
    console.log('Chỉnh sửa đơn hàng:', orderId);
  }
}
