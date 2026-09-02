import { Component, Input } from '@angular/core';
import { Book, CatalogBook } from '../../../domain/models/book.model';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-book-card',
  imports: [CurrencyPipe, DecimalPipe,RouterLink],
  templateUrl: './book-card.component.html',
  styles: ``,
})
export class BookCard {
  @Input({ required: true }) book!: CatalogBook;

  getSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
  }
}
