import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  user = {
    fullName: '',
    email: '',
    phone: '',
    role: 'Khách Hàng',
    address: ''
  };

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

  saveUser() {
    alert('Người dùng mới đã được thêm!');
  }

  cancelAddUser() {
    const confirmation = confirm("Bạn có chắc chắn muốn hủy thêm người dùng không?");
    if (confirmation) {
      window.location.href = '/app-users'; 
    }
  }
  
  @Input() showModal: boolean = false;
@Output() close = new EventEmitter<void>(); 
closeModal() {
  this.close.emit();
}
onOverlayClick(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
    this.closeModal(); 
  }
}
}
