import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CatalogBook } from '../../domain/models/book.model';
import { BookRepository } from '../ports/book.repository';
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
}
