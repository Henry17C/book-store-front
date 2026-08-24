import { Observable } from 'rxjs';
import {
    CatalogBook,
    RegisterBookPayload,
    UpdateBookPayload,
} from '../../domain/models/book.model';
import { Paginated } from '../../domain/models/paginated.model';

export abstract class BookRepository {
    abstract getBookDetails(id: string): Observable<CatalogBook>;
    abstract getCatalogPage(page: number, size: number): Observable<Paginated<CatalogBook>>;

    abstract registerBook(payload: RegisterBookPayload): Observable<void>;
    abstract updateBook(id: string, payload: UpdateBookPayload): Observable<void>;

    abstract removeBookRecommendation(id: string): Observable<void>;
    abstract searchBooks(keyword: string, page: number, size: number,
        onlyInStock: boolean,
    ): Observable<Paginated<CatalogBook>>;

    abstract unarchiveBook(id: string): Observable<void>;
    abstract archiveBook(id: string): Observable<void>;
    abstract recommendBook(id: string): Observable<void>;
}
