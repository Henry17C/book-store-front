

export interface Review {
    id: string;
    bookId: string;
    userId: string;
    rating: number;
    comment: string;
}

export interface WriteReviewPayload {
    bookId: string;
    userId: string;
    rating: number;
    comment: string;
}

export interface UpdateReviewPayload {
    bookId: string;
    userId: string;
    rating: number;
    comment: string;
}