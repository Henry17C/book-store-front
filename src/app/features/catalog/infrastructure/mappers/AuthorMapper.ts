import { Author, RegisterAuthorPayload, UpdateAuthorPayload } from '../../domain/models/author.model';
import {
    AuthorDetailsResponseDTO,
    RegisterAuthorRequestDTO,
    UpdateAuthorRequestDTO,
} from '../dtos/author.dto';

export class AuthorMapper {
    // toDomain
    static toDomain(dto: AuthorDetailsResponseDTO): Author {
        return {
        id: dto.id,
        name: dto.name,
        biography: dto.biography,
        };
    }

    //toDTO
    static toUpdateAuthorRequestDTO(payload: UpdateAuthorPayload): UpdateAuthorRequestDTO {
        return {
        name: payload.name,
        biography: payload.biography,
        };
    }

    static toRegisterAuthorRequestDTO(payload: RegisterAuthorPayload): RegisterAuthorRequestDTO {
        return {
        name: payload.name,
        biography: payload.biography,
        };
    }
}
