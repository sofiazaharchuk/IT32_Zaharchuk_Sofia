import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private items: Product[] = [
    {
      id: 1,
      name: 'Ноутбук',
      manufacturer: 'Lenovo',
      description: 'Ноутбук для роботи та навчання'
    },
    {
      id: 2,
      name: 'Смартфон',
      manufacturer: 'Samsung',
      description: 'Смартфон із великим екраном та потужною камерою'
    },
    {
      id: 3,
      name: 'Навушники',
      manufacturer: 'Sony',
      description: 'Бездротові навушники з активним шумозаглушенням'
    }
  ];

  // Отримання всіх товарів
  getItems(): Product[] {
    return this.items;
  }

  // Отримання одного товару за id
  getItemById(id: number): Product | undefined {
    return this.items.find(item => item.id === id);
  }

  // Додавання нового товару з автоматичним id
  addItem(item: Omit<Product, 'id'>): void {
    const lastId = this.items.length > 0
      ? this.items[this.items.length - 1].id
      : 0;

    const newItem: Product = {
      id: lastId + 1,
      ...item
    };

    this.items.push(newItem);
  }
}
