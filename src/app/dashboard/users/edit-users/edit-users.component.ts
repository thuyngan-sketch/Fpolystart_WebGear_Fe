import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  user = {
    fullName: '',
    email: '',
    phone: '',
    role: 'Khách Hàng',
    address: ''
  };

  constructor(private router: Router) {}

  previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const image = document.getElementById('profileImage') as HTMLImageElement;
    const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        image.src = e.target?.result as string;
        image.style.display = 'block';
        defaultIcon.style.display = 'none';
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveChanges() {
    alert('Thay đổi đã được lưu!');
    // Logic để lưu thay đổi, có thể gọi API ở đây
  }

  cancelChanges() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy thay đổi không?");
    if (confirmation) {
      this.router.navigate(['app-users']); // Điều hướng về trang danh sách người dùng
    }
  }
}