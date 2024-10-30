import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vouchers',
  templateUrl: './add-vouchers.component.html',
  styleUrls: ['./add-vouchers.component.css']
})
export class AddVouchersComponent {
  discount = {
    code: '',
    startDate: '',
    endDate: '',
    percentage: null
};

constructor(private router: Router) {}

onSubmit() {
    alert(`Đã thêm mã giảm giá: ${this.discount.code}\nNgày bắt đầu: ${this.discount.startDate}\nNgày kết thúc: ${this.discount.endDate}\nGiảm giá: ${this.discount.percentage}%`);
    // Logic lưu mã giảm giá vào cơ sở dữ liệu hoặc service ở đây.
    this.router.navigate(['/vouchers']);
}
}
