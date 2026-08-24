import { Observable } from 'rxjs';
import {
    Book,
    RegisterBookPayload,
    UpdateBookPayload,
} from '../../domain/models/book.model';
import { Paginated } from '../../domain/models/paginated.model';

export abstract class BookRepository {
    abstract getBookDetails(id: string): Observable<Book>;
    abstract getCatalogPage(page: number, size: number): Observable<Paginated<Book>>;

    abstract registerBook(payload: RegisterBookPayload): Observable<void>;
    abstract updateBook(id: string, payload: UpdateBookPayload): Observable<void>;

    abstract removeBookRecommendation(id: string): Observable<void>;
    abstract searchBooks(keyword: string, page: number, size: number,
        onlyInStock: boolean,
    ): Observable<Paginated<Book>>;

    abstract unarchiveBook(id: string): Observable<void>;
    abstract archiveBook(id: string): Observable<void>;
    abstract recommendBook(id: string): Observable<void>;
}
