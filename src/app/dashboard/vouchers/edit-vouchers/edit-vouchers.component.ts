import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vouchers',
  templateUrl: './edit-vouchers.component.html',
  styleUrls: ['./edit-vouchers.component.css']
})
export class EditVouchersComponent {
  discount = {
    code: 'CODE123',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    percentage: 20
};

constructor(private router: Router) {}

onSubmit() {
    alert(`Đã cập nhật mã giảm giá: ${this.discount.code}\nNgày bắt đầu: ${this.discount.startDate}\nNgày kết thúc: ${this.discount.endDate}\nGiảm giá: ${this.discount.percentage}%`);
}

onCancel() {
    this.router.navigate(['/vouchers']);
}
}
