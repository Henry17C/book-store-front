

export interface RegisterAuthorPayload{
    name:string;
    biography:string;

}

export interface UpdateAuthorPayload{
    name:string;
    biography:string;
}

export interface Author{
    id: string;
    name:string
    biography:string;
}