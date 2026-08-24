import { Observable } from 'rxjs';
import { Review, UpdateReviewPayload, WriteReviewPayload } from '../../domain/models/review.model';
import { Paginated } from '../../domain/models/paginated.model';

export abstract class ReviewRepository {
    abstract getReviewsByBookId(
        bookId: string,
        page: number,
        size: number,
    ): Observable<Paginated<Review>>;
    abstract archiveReview(id: string): Observable<void>;
    abstract updateReview(id: string, payload: UpdateReviewPayload): Observable<void>;
    abstract writeReview(payload: WriteReviewPayload): Observable<void>;
}
