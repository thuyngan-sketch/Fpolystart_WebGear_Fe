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
  // searchTerm: string = '';
  // orders: any[] = []; 
  // filteredOrders: any[] = []; 
  // showModalEdit: boolean = false; 
  // orderDetail: any = null;
  // order: any = {}; 
  // showModalDetail: boolean = false;
  // selectedOrderId: string = '';
  // selectedOrderIdEdit: string = '';
  // constructor(private orderService: OrderService, private router: Router) {}

  // ngOnInit() {
  //   this.getAllOrders(); 
  // }

  // getAllOrders(): void {
  //   this.orderService.getAllOrder().subscribe({
  //     next: (data) => {
  //       this.orders = data;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching orders:', err);
  //     }
  //   });
  // }


  // filterOrders() {
  //   const term = this.searchTerm.toLowerCase();
  //   this.filteredOrders = this.orders.filter(order =>
  //     order.customerName.toLowerCase().includes(term) ||
  //     order.product.toLowerCase().includes(term) ||
  //     order.status.toLowerCase().includes(term)
  //   );
  // }

  // editOrder(orderId: string) {
  //   this.order = this.orders.find(order => order.id === orderId); 
  //   if (this.order) {
  //     this.showModalEdit = true; 
  //   }
  // }


  // closeModalEdit() {
  //   this.showModalEdit = false;
  // }


  // saveOrder() {
  //   if (this.order) {
  //     this.orderService.updateOrder(this.order.id, this.order).subscribe(
  //       (data) => {
  //         alert('Cập nhật đơn hàng thành công!');
  //         this.closeModalEdit();
  //         this.getAllOrders(); 
  //       },
  //       (error) => {
  //         console.error('Lỗi khi cập nhật đơn hàng:', error);
  //       }
  //     );
  //   }
  // }


  // getStatusLabel(status: number): string {
  //   switch (status) {
  //     case 1: return 'Chờ xử lý';
  //     case 2: return 'Xác nhận';
  //     case 3: return 'Đang xử lý';
  //     case 4: return 'Đang giao';
  //     case 5: return 'Đã giao';
  //     case 6: return 'Đơn bị huỷ';
  //     default: return 'Không xác định';
  //   }
  // }
 
  // // openOrderDetailModal(orderId: string): void {
  // //   this.selectedOrderId = orderId;
  // //   this.showModalDetail = true;
  // // }
  // getOrderDetails(orderId: number): void {
  //   this.orderService.getOrderById(orderId).subscribe({
  //     next: (order) => {
  //       this.selectedOrder = order;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching order details:', err);
  //     }
  //   });
  // }

  // updateOrder(orderId: number, orderData: any): void {
  //   this.orderService.updateOrder(orderId, orderData).subscribe({
  //     next: () => {
  //       console.log('Order updated successfully!');
  //     },
  //     error: (err) => {
  //       console.error('Error updating order:', err);
  //     }
  //   });
  // }

  // closeOrderDetailModal(): void {
  //   this.showModalDetail = false;
  // }

  // // openEditOrderModal(orderId: string): void {
  // //   this.selectedOrderId = orderId;
  // //   this.showModalEdit = true;
  // // }

  // openEditOrderModal(orderId: number) {
  //   // Lấy thông tin sản phẩm từ API dựa trên productId
  //   this.orderService.getOrderById(orderId).subscribe(
  //     (data) => {
  //       this.selectedOrderIdEdit = data;  // Lưu thông tin sản phẩm cần chỉnh sửa
  //       this.showModalEdit = true;     // Mở modal chỉnh sửa
  //     },
  //     (error) => {
  //       console.error('Lỗi khi lấy thông tin sản phẩm:', error);
  //     }
  //   );
  // } 

  // closeEditModal(): void {
  //   this.showModalEdit = false;
  // }
  searchTerm: string = '';  // Từ khoá tìm kiếm
  orders: any[] = [];  // Dữ liệu đơn hàng
  filteredOrders: any[] = [];  // Danh sách đơn hàng đã lọc
  showModalEdit: boolean = false;  // Cờ hiển thị modal chỉnh sửa
  showModalDetail: boolean = false;  // Cờ hiển thị modal chi tiết
  orderDetail: any = null;  // Thông tin chi tiết đơn hàng
  order: any = {};  // Dữ liệu đơn hàng cần chỉnh sửa
  selectedOrderId: string = '';  // ID đơn hàng đã chọn
  selectedOrderIdEdit: string = '';  // ID đơn hàng cần chỉnh sửa

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.getAllOrders();  // Lấy tất cả đơn hàng khi component khởi tạo
  }

  // Lấy tất cả đơn hàng từ API
  getAllOrders(): void {
    this.orderService.getAllOrder().subscribe({
      next: (data) => {
        this.orders = data;
        this.filteredOrders = data;  // Cập nhật danh sách đơn hàng đã lọc
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  // Lọc đơn hàng theo từ khoá tìm kiếm
  filterOrders() {
    const term = this.searchTerm.toLowerCase();
    this.filteredOrders = this.orders.filter(order =>
      order.userName.toLowerCase().includes(term) ||
      order.product.toLowerCase().includes(term) ||
      order.status.toLowerCase().includes(term)
    );
  }

  // Lấy nhãn trạng thái của đơn hàng
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

  // Mở modal chi tiết đơn hàng
  openOrderDetailModal(orderId: number): void {  // orderId là kiểu number
    this.orderService.getOrderById(orderId).subscribe(
      (data) => {
        this.orderDetail = data;  
        this.showModalDetail = true;  // Hiển thị modal chi tiết
      },
      (error) => {
        console.error('Lỗi khi lấy thông tin đơn hàng:', error);
      }
    );
  }
  
  closeOrderDetailModal(): void {
    this.showModalDetail = false;  // Đóng modal khi bấm nút đóng
  }
  
  // Mở modal chỉnh sửa đơn hàng
  openEditOrderModal(orderId: number): void {  // orderId là kiểu number
    this.orderService.getOrderById(orderId).subscribe(
      (data) => {
        this.order = data;  // Cập nhật dữ liệu đơn hàng để chỉnh sửa
        this.showModalEdit = true;  // Hiển thị modal chỉnh sửa
      },
      (error) => {
        console.error('Lỗi khi lấy thông tin đơn hàng:', error);
      }
    );
  }
  
  closeEditModal(): void {
    this.showModalEdit = false;  // Đóng modal khi bấm nút đóng
  }
  

  // Lưu đơn hàng đã chỉnh sửa
  saveOrder(): void {
    if (this.order) {
      this.orderService.updateOrder(this.order.id, this.order).subscribe(
        (data) => {
          alert('Cập nhật đơn hàng thành công!');
          this.closeEditModal();  // Đóng modal sau khi lưu
          this.getAllOrders();  // Cập nhật lại danh sách đơn hàng
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
    }
  }
  
}