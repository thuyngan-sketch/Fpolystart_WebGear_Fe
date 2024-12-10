import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-email',
  template: `<p>{{ message }}</p>`
})
export class VerifyEmailComponent implements OnInit {
  message: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      this.verifyEmail(token);
    });
  }

  verifyEmail(token: string) {
    this.http.post(`https://localhost:7249/api/Login/verify-email`, { token })
      .subscribe(
        response => {
          this.message = 'Xác thực thành công!';
        },
        error => {
          this.message = 'Xác thực thất bại. Vui lòng thử lại.';
        }
      );
  }
}
