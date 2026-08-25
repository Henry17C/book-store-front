import { inject, Injectable } from '@angular/core';
import { AuthorRepository } from '../../application/ports/author.repository';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  Author,
  RegisterAuthorPayload,
  UpdateAuthorPayload,
} from '../../domain/models/author.model';
import { AuthorDetailsResponseDTO } from '../dtos/author.dto';
import { AuthorMapper } from '../mappers/AuthorMapper';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService implements AuthorRepository {
  
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/authors'; 

  // --- LECTURAS ---

  getAuthorById(id: string): Observable<Author> {
    return this.http.get<AuthorDetailsResponseDTO>(`${this.apiUrl}/${id}`).pipe(
      map(response => AuthorMapper.toDomain(response))
    );
  }

  searchAuthorsByName(name: string): Observable<Author[]> {
    const params = new HttpParams().set('name', name);

    return this.http.get<AuthorDetailsResponseDTO[]>(`${this.apiUrl}/search`, { params }).pipe(
      map(response => response.map(dto => AuthorMapper.toDomain(dto)))
    );
  }

  // --- ESCRITURAS ---

  registerAuthor(payload: RegisterAuthorPayload): Observable<void> {
    const requestDto = AuthorMapper.toRegisterAuthorRequestDTO(payload);
    return this.http.post<void>(this.apiUrl, requestDto);
  }

  updateAuthor(id: string, payload: UpdateAuthorPayload): Observable<void> {
    const requestDto = AuthorMapper.toRegisterAuthorRequestDTO(payload);
    return this.http.put<void>(`${this.apiUrl}/${id}`, requestDto);
  }
}