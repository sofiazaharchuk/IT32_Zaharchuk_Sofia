import { Component } from '@angular/core';
import { NewsCard } from './news-card/news-card';

interface NewsItem {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  newsList: NewsItem[] = [
    {
      title: 'Angular отримав нову версію',
      author: 'Іван Петренко',
      description: 'Команда Angular представила оновлення фреймворку.'
    },
    {
      title: 'ШІ у веброзробці',
      author: 'Олена Коваль',
      description: 'Розробники все частіше використовують ШІ-інструменти.'
    },
    {
      title: 'TypeScript 6.0 вже тут',
      author: 'Максим Гриценко',
      description: 'Нова версія додає покращену типізацію та швидкодію.'
    }
  ];

  message: string = '';

  onNewsOpened(title: string): void {
    this.message = `Відкрито новину: "${title}"`;
  }
}
