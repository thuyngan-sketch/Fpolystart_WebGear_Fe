import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  currentIndex: number = 0;
  images: string[] = [
    'https://via.placeholder.com/300x100?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x300?text=Image+3'
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}