import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private router: Router) {}
  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'vana@example.com', createdAt: new Date('2024-01-01'), role: 'Quản Trị Viên', isActive: true },
    { id: 2, name: 'Trần Thị B', email: 'thib@example.com', createdAt: new Date('2024-02-15'), role: 'Khách Hàng', isActive: false },
    // Thêm người dùng khác nếu cần
  ];


  ngOnInit(): void {}

  addUser() {
    // Logic để thêm người dùng mới
    window.location.href = 'app-add-users';
  }

  editUser(userId: number) {
    // Logic để chỉnh sửa người dùng
    window.location.href ='edit-users/:id';
  }
  showModalAdd: boolean = false;
  openModalAdd() {
    this.showModalAdd = true;
  }
  closeModalAdd() {
    this.showModalAdd = false;
  }
}
