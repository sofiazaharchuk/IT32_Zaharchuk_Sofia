import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  // Сервіс підключений через Dependency Injection
  constructor(public productService: ProductService) {}
}
