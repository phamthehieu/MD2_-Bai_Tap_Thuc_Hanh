export class Librarian {
    private _id: number;
    private _producer: string;
    private _issueNumber: number;

    constructor(id: number, producer: string, issueNumber: number) {
        this._id = id;
        this._producer = producer;
        this._issueNumber = issueNumber;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getProducer(): string {
        return this._producer;
    }

    setProducer(value: string) {
        this._producer = value;
    }

    getIssueNumber(): number {
        return this._issueNumber;
    }

    setIssueNumber(value: number) {
        this._issueNumber = value;
    }
}