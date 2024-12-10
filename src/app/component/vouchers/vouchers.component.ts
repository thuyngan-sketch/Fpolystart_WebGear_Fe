import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Discount {
  code: string;
  startDate: string;
  endDate: string;
  discountPercentage: number;
}
@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent {
  discounts: Discount[] = [
    { code: 'DISCOUNT20', startDate: '2024-09-01', endDate: '2024-09-30', discountPercentage: 20 },
    { code: 'DISCOUNT10', startDate: '2024-10-01', endDate: '2024-10-31', discountPercentage: 10 }
];

constructor(private router: Router) {}

editDiscount(code: string) {
    this.router.navigate(['/edit-vouchers', { code }]);
}

deleteDiscount(code: string) {
    if (confirm(`Bạn có chắc chắn muốn xóa mã giảm giá ${code} không?`)) {
        alert(`Mã giảm giá ${code} đã bị xóa.`);
        // Logic xóa mã giảm giá từ danh sách
        this.discounts = this.discounts.filter(discount => discount.code !== code);
    }
}

showModalAdd: boolean = false;
openModalAdd() {
  this.showModalAdd = true;
}
closeModalAdd() {
  this.showModalAdd = false;
}
}