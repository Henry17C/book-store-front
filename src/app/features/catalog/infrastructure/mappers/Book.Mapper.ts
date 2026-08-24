import {
  Book,
  BookFormat,
  CatalogBook,
  RegisterBookPayload,
  UpdateBookPayload,
} from '../../domain/models/book.model';
import { Paginated } from '../../domain/models/paginated.model';
import {
  BookDetailsResponseDTO,
  CatalogBookResponseDTO,
  PageResponseDTO,
  RegisterBookRequestDTO,
  UpdateBookRequestDTO,
} from '../dtos/book.dto';

export class BookMapper {
  //toDomain
static toDomain(dto: BookDetailsResponseDTO): Book {
    return {
      id: dto.id,
      title: dto.title,
      isbn: dto.isbn,
      format: dto.format as BookFormat,
      authorNames: dto.authorNames,
      averageRating: dto.averageRating,
      description: dto.description,
      coverUrl: dto.coverUrl,
      price: {
        amount: dto.price.amount,
        currency: dto.price.currency
      },
      inStock: dto.inStock,
    };
  }

static toCatalogBook(dto: CatalogBookResponseDTO): CatalogBook {
    return {
      id: dto.id,
      title: dto.title,
      coverUrl: dto.coverUrl,
      authorNames: dto.authorNames,
      price: {
        amount: dto.price.amount,
        currency: dto.price.currency
      },
      averageRating: dto.averageRating,
      inStock: dto.inStock,
    };
  }

static toPaginated<DTO, Domain>(
    dto: PageResponseDTO<DTO>, 
    mapItemFn: (item: DTO) => Domain
  ): Paginated<Domain> {
    return {
      items: dto.content.map(mapItemFn), 
      currentPage: dto.currentPage,
      totalPages: dto.totalPages,
      totalElements: dto.totalElements,
    };
}

  //toDTO

static toRegisterBookRequestDTO(payload: RegisterBookPayload): RegisterBookRequestDTO {
    return {
      title: payload.title,
      isbn: payload.isbn,
      price: {
        amount: payload.price.amount,
        currency: payload.price.currency
      },
      format: payload.format,
      authorIds: payload.authorIds,
      language: payload.language,
      releaseDate: payload.releaseDate.toISOString(),
      description: payload.description,
    };
  }

static toUpdateBookRequestDTO(payload: UpdateBookPayload): UpdateBookRequestDTO {
    return {
      title: payload.title,
      isbn: payload.isbn,
      price: {
        amount: payload.price.amount,
        currency: payload.price.currency
      },
      format: payload.format,
      authorIds: payload.authorIds,
      language: payload.language,
      releaseDate: payload.releaseDate.toISOString(),
      description: payload.description,
    };
  }
}
