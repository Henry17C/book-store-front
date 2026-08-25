import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ReviewRepository } from "../../application/ports/review.repository";
import { Review, UpdateReviewPayload, WriteReviewPayload } from "../../domain/models/review.model";
import { map, Observable } from "rxjs";
import { Paginated } from "../../domain/models/paginated.model";
import { ReviewDetailsResponseDTO } from "../dtos/review.dto";
import { ReviewMapper } from "../mappers/Review.Mapper";
import { PageResponseDTO } from "../dtos/book.dto";

@Injectable({
    providedIn: 'root'
})
export class ReviewHttpService implements ReviewRepository {

    private readonly http = inject(HttpClient)
    private readonly apiUrl = 'http://localhost:8080/reviews';

// --- ESCRITURAS ---
    
    writeReview(payload: WriteReviewPayload): Observable<void> {
        const requestDto = ReviewMapper.toWriteReviewRequestDTO(payload);
        return this.http.post<void>(this.apiUrl, requestDto);
    }

    updateReview(id: string, payload: UpdateReviewPayload): Observable<void> {
        const requestDto = ReviewMapper.toUpdateReviewRequestDTO(payload);
        return this.http.put<void>(`${this.apiUrl}/${id}`, requestDto);
    }

    archiveReview(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // --- LECTURAS ---

getReviewsByBookId(bookId: string, page: number, size: number): Observable<Paginated<Review>> {
        const params = new HttpParams()
            .set('bookId', bookId)
            .set('page', page.toString())
            .set('size', size.toString());
        return this.http.get<PageResponseDTO<ReviewDetailsResponseDTO>>(this.apiUrl, { params })
            .pipe(
                map(response => ReviewMapper.toPaginated(response, ReviewMapper.toDomain))
            );
    }

    

    

}