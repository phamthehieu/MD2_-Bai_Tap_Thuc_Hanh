import {Librarian} from "./librarian";

export class Magazine extends Librarian{
    private _releaseDate: number;

    constructor(id: number, producer: string, issueNumber: number, releaseDate: number) {
        super(id, producer, issueNumber);
        this._releaseDate = releaseDate;
    }

    getReleaseDate(): number {
        return this._releaseDate;
    }

    setReleaseDate(value: number) {
        this._releaseDate = value;
    }
}