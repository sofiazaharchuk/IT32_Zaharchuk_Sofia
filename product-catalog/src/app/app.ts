import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Сервіс підключений через Dependency Injection (не через new ProductService())
  constructor(public productService: ProductService) {}

  // Поля форми
  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  addProduct(): void {
    if (!this.newName.trim() || this.newPrice === null || this.newQuantity === null) {
      return;
    }

    this.productService.addProduct(this.newName.trim(), this.newPrice, this.newQuantity);

    // Очищення форми після додавання
    this.newName = '';
    this.newPrice = null;
    this.newQuantity = null;
  }

  removeProduct(id: number): void {
    this.productService.removeProduct(id);
  }
}
