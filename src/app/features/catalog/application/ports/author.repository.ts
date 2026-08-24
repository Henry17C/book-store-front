import { Observable } from "rxjs";
import { Author, RegisterAuthorPayload, UpdateAuthorPayload } from "../../domain/models/author.model";

export abstract class AuthorRepository{


    abstract registerAuthor(payload: RegisterAuthorPayload):Observable<void>;

    abstract updateAuthor(id:string, payload: UpdateAuthorPayload): Observable<void>;

    abstract searchAuthorsByName(name:string): Observable<Author[]>;

    abstract getAuthorById(id:string):Observable<Author>;
}