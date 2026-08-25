import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paginated } from '../../domain/models/paginated.model';
import {
  Book,
  CatalogBook,
  RegisterBookPayload,
  UpdateBookPayload,
} from '../../domain/models/book.model';
import { BookDetailsResponseDTO, CatalogBookResponseDTO, PageResponseDTO } from '../dtos/book.dto';
import { BookMapper } from '../mappers/Book.Mapper';
import { BookRepository } from '../../application/ports/book.repository';

@Injectable({
  providedIn: 'root',
})
export class BookHttpService implements BookRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/books';

  // --- LECTURAS ---
  getCatalogPage(page: number, size: number): Observable<Paginated<CatalogBook>> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());

    return this.http.get<PageResponseDTO<CatalogBookResponseDTO>>(this.apiUrl, { params }).pipe(
      map((response) => BookMapper.toPaginated(response, BookMapper.toCatalogBook)),
    );
  }

  searchBooks(
    keyword: string,
    page: number,
    size: number,
    onlyInStock: boolean,
  ): Observable<Paginated<CatalogBook>> {
    const params = new HttpParams()
      .set('keyword', keyword)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('onlyInStock', onlyInStock.toString());

    return this.http
      .get<PageResponseDTO<CatalogBookResponseDTO>>(`${this.apiUrl}/search`, { params })
      .pipe(map((response) => BookMapper.toPaginated(response, BookMapper.toCatalogBook)));
  }

  getBookDetails(id: string): Observable<Book> {
    return this.http
      .get<BookDetailsResponseDTO>(`${this.apiUrl}/${id}`)
      .pipe(map((response) => BookMapper.toDomain(response)));
  }

  // --- ESCRITURAS ---
  registerBook(payload: RegisterBookPayload): Observable<void> {
    const requestDTO = BookMapper.toRegisterBookRequestDTO(payload);
    return this.http.post<void>(this.apiUrl, requestDTO);
  }

  updateBook(id: string, payload: UpdateBookPayload): Observable<void> {
    const requestDTO = BookMapper.toUpdateBookRequestDTO(payload);
    return this.http.put<void>(`${this.apiUrl}/${id}`, requestDTO);
  }

  removeBookRecommendation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/recommend`);
  }

  archiveBook(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/archive`, {});
  }

  unarchiveBook(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/unarchive`, {});
  }

  recommendBook(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/recommend`, {});
  }
}
