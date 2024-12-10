import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  request = {
    oldPassword: '',
    newPassword: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  changePassword() {
    this.http.post('https://localhost:7249/api/Password/change-password', this.request)
      .subscribe(
        response => {
          alert('Đổi mật khẩu thành công!');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error changing password:', error);
          alert('Đổi mật khẩu thất bại: ' + (error.error?.message || 'Vui lòng thử lại.'));
        }
      );
  }
}
