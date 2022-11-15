import {Librarian} from "./librarian";

export class Newspaper extends Librarian{
    private _releaseNumber: number;
    private _releaseMonth: number;

    constructor(id: number, producer: string, issueNumber: number, releaseNumber: number, releaseMonth: number) {
        super(id, producer, issueNumber);
        this._releaseNumber = releaseNumber;
        this._releaseMonth = releaseMonth;
    }

    getReleaseNumber(): number {
        return this._releaseNumber;
    }

    setReleaseNumber(value: number) {
        this._releaseNumber = value;
    }

    getReleaseMonth(): number {
        return this._releaseMonth;
    }

    setReleaseMonth(value: number) {
        this._releaseMonth = value;
    }
}