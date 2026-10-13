import { Component } from '@angular/core';
import { AddProduct } from './add-product/add-product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
