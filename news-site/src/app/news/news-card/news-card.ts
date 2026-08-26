import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-card',
  standalone: true,
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input() title!: string;
  @Input() author!: string;
  @Input() description: string = '';

  @Output() readClicked = new EventEmitter<string>();

  onClick(): void {
    this.readClicked.emit(this.title);
  }
}
