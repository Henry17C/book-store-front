export interface UpdateReviewRequestDTO {
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
}

export interface WriteReviewRequestDTO {
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
}

export interface ReviewDetailsResponseDTO {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
}
