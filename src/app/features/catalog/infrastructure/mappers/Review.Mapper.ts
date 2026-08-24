import { Review, UpdateReviewPayload, WriteReviewPayload } from '../../domain/models/review.model';
import {
  ReviewDetailsResponseDTO,
  UpdateReviewRequestDTO,
  WriteReviewRequestDTO,
} from '../dtos/review.dto';

export class ReviewMapper {
    //to Domain
    static toDomain(dto: ReviewDetailsResponseDTO): Review {
        return {
        id: dto.id,
        bookId: dto.bookId,
        userId: dto.userId,
        rating: dto.rating,
        comment: dto.comment,
        };
    }

    //toDTO
    static toUpdateReviewRequestDTO(payload: UpdateReviewPayload): UpdateReviewRequestDTO {
        return {
        bookId: payload.bookId,
        userId: payload.userId,
        rating: payload.rating,
        comment: payload.comment,
        };
    }

    static toWriteReviewRequestDTO(payload: WriteReviewPayload): WriteReviewRequestDTO {
        return {
        bookId: payload.bookId,
        userId: payload.userId,
        rating: payload.rating,
        comment: payload.comment,
        };
    }
}
