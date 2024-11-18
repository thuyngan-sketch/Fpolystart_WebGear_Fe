import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
product = {
  name: '',
  category: 'chuột',
  color:'',
  Connectivity :'',
  Dimensions :'',
  Material :'',
  EyeReading :'',
  Button :'',
  SS :'',
  quantity: null,
  dpi: null,
  connection: '',
  material: '',
  frequency: null,
  buttonCount: null,
  batteryCapacity: '',
  led: 'Có',
  Layout: '',
  Case: '',
  Switch :'',
  SwitchLife :'',
  KeycapMaterial :'',
  SwitchMaterial:'',
  Stabilizes :'',
  PCB:'',
  description: ''
};

previewImage(event: any) {
  const image = document.getElementById('productImage') as HTMLImageElement;
  const defaultIcon = document.getElementById('defaultIcon') as HTMLElement;

  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';
  defaultIcon.style.display = 'none';
}

saveProduct() {
  alert('Sản phẩm mới đã được thêm!');

}

cancelAddProduct() {
  const confirmation = confirm("Bạn có chắc chắn muốn hủy thêm sản phẩm không?");
  if (confirmation) {

      window.location.href = 'products'; 
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