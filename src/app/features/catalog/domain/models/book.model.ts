
export const BOOK_FORMATS = ['PAPERBACK', 'HARDCOVER', 'EBOOK'] as const;
export const BOOK_LANGUAGES= ["SPANISH", "ENGLISH", "ITALIAN", "FRENCH"] as const

export type BookFormat = typeof BOOK_FORMATS[number];
export type BookLanguage = typeof BOOK_LANGUAGES[number];

export interface Money {
    amount: number;
    currency: string;
}


export interface CatalogBook {
    id: string,
    title: string;
    isbn:string;
    format:BookFormat;
    authorNames: string[];
    averageRating: number;
    description: string;
    coverUrl: string;
    price: Money;
    inStock: boolean;
    
}
export interface RegisterBookPayload {
    title: string;
    isbn: string;
    price: Money;
    format: BookFormat;
    authorIds: string[];
    language: BookLanguage;
    releaseDate: Date;
    description: string;

}


export interface UpdateBookPayload {
    title: string;
    isbn: string;
    price: Money;
    format: BookFormat;
    authorIds: string[];
    language: BookLanguage;
    releaseDate: Date;
    description: string;
}

