
export interface Paginated<T>{
    items: T[],
    currentPage:number
    totalPages:number;
    totalElements:number;
}