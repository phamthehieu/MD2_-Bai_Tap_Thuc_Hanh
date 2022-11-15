import {Librarian} from "./librarian";

export class Book extends Librarian{
    private _author: string;
    private _pageNumber: number;

    constructor(id: number, producer: string, issueNumber: number, author: string, pageNumber: number) {
        super(id, producer, issueNumber);
        this._author = author;
        this._pageNumber = pageNumber;
    }

    getAuthor(): string {
        return this._author;
    }

    setAuthor(value: string) {
        this._author = value;
    }

    getPageNumber(): number {
        return this._pageNumber;
    }

    setPageNumber(value: number) {
        this._pageNumber = value;
    }
}