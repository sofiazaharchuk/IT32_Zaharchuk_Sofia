import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  name: string = '';
  manufacturer: string = '';
  description: string = '';

  submitted = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.productService.addItem({
      name: this.name,
      manufacturer: this.manufacturer,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;

    // Після успішного додавання переходимо до списку товарів
    this.router.navigate(['/products']);
  }
}
