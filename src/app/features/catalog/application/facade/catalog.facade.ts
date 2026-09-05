import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book, CatalogBook } from '../../domain/models/book.model';
import { BookRepository } from '../ports/book.repository';
import { Paginated } from '../../domain/models/paginated.model';
@Injectable({
  providedIn: 'root',
})
export class CatalogFacade {
  private readonly bookRepository = inject(BookRepository);

  getNewReleases(): Observable<CatalogBook[]> {
    //   /books/category/NEW_RELEASES?page=0&size=10
    return this.bookRepository
      .getBooksByCategory('NEW_RELEASES', 0, 10)
      .pipe(map((paginated) => paginated.items));
  }

  getBestSellers(): Observable<CatalogBook[]> {
    //   /books/category/BEST_SELLERS?page=0&size=10
    return this.bookRepository
      .getBooksByCategory('BEST_SELLERS', 0, 10)
      .pipe(map((paginated) => paginated.items));
  }

  getRecommended(): Observable<CatalogBook[]> {
    return this.bookRepository
      .getBooksByCategory('RECOMMENDED', 0, 10)
      .pipe(map((paginated) => paginated.items));
  }

  getBookDetailsByIsbn(isbn: string): Observable<Book> {
    return this.bookRepository.getBookDetailsByIsbn(isbn);
  }

  getBooksByCategory(
    category: string,
    page: number,
    size: number,
  ): Observable<Paginated<CatalogBook>> {
    return this.bookRepository.getBooksByCategory(category, page, size);
  }

  searchBooks(query: string): Observable<CatalogBook[]> {
    return this.bookRepository.searchBooks(query, 0,10, true).
    pipe(map((paginated) => paginated.items));
  }
}
