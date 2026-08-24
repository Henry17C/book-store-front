
export interface RegisterAuthorRequestDTO{
    name:string;
    biography:string;
}

export interface UpdateAuthorRequestDTO{
    name:string;
    biography:string;
}

export interface AuthorDetailsResponseDTO {
    id:string,
    name: string,
    biography:string;
}