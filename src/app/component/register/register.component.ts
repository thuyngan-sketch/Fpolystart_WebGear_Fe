import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    email: '',
    phone: '',
    name: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('https://localhost:7249/api/User/register', this.user)
      .subscribe(
        response => {
          alert('Đăng ký thành công! Kiểm tra email để xác thực.');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error response:', error);
          const errorMessage = error.error?.error || 'Vui lòng thử lại.';
          alert(`Đăng ký thất bại. Lỗi: ${errorMessage}`);
        }
      );
  }
  
}
  

