import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';

interface Movie {
  title: string;
  year: number | null;
  rating: number | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. Масив мінімум із 3 об'єктів
  movies: Movie[] = [
    { title: 'Interstellar', year: 2014, rating: 9 },
    { title: 'Avatar', year: 2009, rating: 8 },
    { title: 'Titanic', year: 1997, rating: 7 }
  ];

  // Поля форми, пов'язані через [(ngModel)]
  newTitle: string = '';
  newYear: number | null = null;
  newRating: number | null = null;

  // Додавання нового фільму
  addMovie(): void {
    if (!this.newTitle.trim()) {
      return; // перевірка: порожня назва не додається
    }

    this.movies.push({
      title: this.newTitle.trim(),
      year: this.newYear,
      rating: this.newRating
    });

    // Очищення форми після додавання
    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  // Видалення фільму за індексом
  removeMovie(index: number): void {
    this.movies.splice(index, 1);
  }

  // Динамічний клас залежно від рейтингу (для ngClass)
  getRatingClass(rating: number | null): string {
    if (rating === null) {
      return '';
    }
    if (rating >= 8) {
      return 'rating-high';
    }
    if (rating >= 5) {
      return 'rating-medium';
    }
    return 'rating-low';
  }
}
