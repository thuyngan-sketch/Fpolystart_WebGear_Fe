import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent  {
  products = [
    { title: 'Product 1', price: 180.85, image: 'https://via.placeholder.com/312x350' },
    { title: 'Product 2', price: 190.85, image: 'https://via.placeholder.com/312x350' },
    { title: 'Product 3', price: 160.85, image: 'https://via.placeholder.com/312x350' },
    { title: 'Product 4', price: 170.85, image: 'https://via.placeholder.com/312x350' },
    { title: 'Product 5', price: 150.85, image: 'https://via.placeholder.com/312x350' },
    { title: 'Product 6', price: 200.85, image: 'https://via.placeholder.com/312x350' },
  ];

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}