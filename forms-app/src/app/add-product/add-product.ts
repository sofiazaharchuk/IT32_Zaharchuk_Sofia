import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

interface Product {
  name: string;
  manufacturer: string;
  description: string;
}

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  // Об'єкт, з яким пов'язані поля форми через [(ngModel)]
  newItem: Product = {
    name: '',
    manufacturer: '',
    description: ''
  };

  // Масив доданих товарів (виводиться під формою)
  products: Product[] = [];

  // Прапорець: чи була спроба відправити форму
  submitted = false;

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    // Додаємо копію об'єкта, щоб очищення форми не змінило вже доданий товар
    this.products.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}
