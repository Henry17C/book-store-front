import { Component, inject } from '@angular/core';
import { Book, BOOK_FORMATS } from '../../../domain/models/book.model';
import { Observable, switchMap } from 'rxjs';
import { CatalogFacade } from '../../../application/facade/catalog.facade';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule, AsyncPipe, CurrencyPipe, DecimalPipe],
  templateUrl: './book-details.component.html',

})
export class BookDetails {

  private readonly route = inject(ActivatedRoute)
  private readonly catalogFacade = inject(CatalogFacade)

  book$: Observable<Book> = this.route.paramMap.pipe(
    switchMap(params => {
      // 1. URL: /libro/el-resplandor/9780307743657
      
      // 2. Extraer SOLO el ISBN (slug ignorado, no sirve para la BD)
      const isbn = params.get('isbn')!;
      
      // 3. Facade y Service trabajan intactos
      return this.catalogFacade.getBookDetailsByIsbn(isbn);
    })
  );

}
