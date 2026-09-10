import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Приватний signal з початковими товарами
  private products = signal<Product[]>([
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 4 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ]);

  // Лічильник для генерації унікальних id
  private nextId = 4;

  // Метод отримання даних
  getProducts(): Product[] {
    return this.products();
  }

  // Метод додавання нового товару
  addProduct(name: string, price: number, quantity: number): void {
    const newProduct: Product = {
      id: this.nextId++,
      name,
      price,
      quantity
    };

    this.products.update(list => [...list, newProduct]);
  }

  // Метод видалення товару за id
  removeProduct(id: number): void {
    this.products.update(list => list.filter(product => product.id !== id));
  }
}
