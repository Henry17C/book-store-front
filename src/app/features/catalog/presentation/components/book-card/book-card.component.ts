import { Component, Input } from '@angular/core';
import { Book, CatalogBook } from '../../../domain/models/book.model';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-book-card',
  imports: [CurrencyPipe,DecimalPipe],
  templateUrl: './book-card.component.html',
  styles: ``,
})
export class BookCard {
  @Input({ required: true }) book!: CatalogBook;
}
