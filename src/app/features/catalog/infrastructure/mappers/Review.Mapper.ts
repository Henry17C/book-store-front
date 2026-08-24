import { Paginated } from '../../domain/models/paginated.model';
import { Review, UpdateReviewPayload, WriteReviewPayload } from '../../domain/models/review.model';
import { PageResponseDTO } from '../dtos/book.dto';
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

  static toPaginated<DTO, Domain>(
    dto: PageResponseDTO<DTO>,
    mapItemFn: (item: DTO) => Domain,
  ): Paginated<Domain> {
    return {
      items: dto.content.map(mapItemFn),
      currentPage: dto.currentPage,
      totalPages: dto.totalPages,
      totalElements: dto.totalElements,
    };
  }
}
