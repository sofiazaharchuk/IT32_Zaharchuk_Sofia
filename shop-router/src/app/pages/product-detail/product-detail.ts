import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  products: Product[] = [
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 5 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ];

  id: number = 0;
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.product = this.products.find(p => p.id === this.id);
    });
  }
}
