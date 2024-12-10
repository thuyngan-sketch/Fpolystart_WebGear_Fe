import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  request = {
    token: '',
    newPassword: ''
  };

  constructor(private http: HttpClient) {}

  resetPassword() {
    this.http.post('https://localhost:7249/api/Password/reset-password', this.request)
      .subscribe(
        response => {
          alert('Mật khẩu đã được đặt lại thành công!');
        },
        error => {
          console.error('Error resetting password:', error);
          alert('Lỗi đặt lại mật khẩu: ' + (error.error?.message || 'Vui lòng thử lại.'));
        }
      );
  }
}
