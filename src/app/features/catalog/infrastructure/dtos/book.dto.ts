
interface MoneyRequest {
  amount: number;
  currency: string;
}

interface MoneyResponse {
  amount: number;
  currency: string;
}

export interface RegisterBookRequestDTO {
  title: string;
  isbn: string;
  price: MoneyRequest;
  format: string;
  authorIds: string[];
  language: string;
  releaseDate: string;
  description: string;
}

export interface UpdateBookRequestDTO {
  title: string;
  isbn: string;
  price: MoneyRequest;
  format: string;
  authorIds: string[];
  language: string;
  releaseDate: string;
  description: string;
}

export interface BookDetailsResponseDTO {
  id: string;
  title: string;
  isbn: string;
  format: string;
  authorNames: string[];
  averageRating: number;
  description: string;
  coverUrl: string;
  price: MoneyResponse;
  inStock: boolean;
}

export interface CatalogBookResponseDTO {
  id: string;
  title: string;
  coverUrl: string;
  authorNames: string[];
  price: MoneyResponse;
  averageRating: number;
  inStock: boolean;
  isbn:string
}

export interface PageResponseDTO<T> {
  content: T[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
}
