import {Cadres} from "./Cardres";

export class Worker extends Cadres{
    private _rank: number;

    constructor(name: string, age: number, gender: string, address: string, rank: number) {
        super(name, age, gender, address);
        this._rank = rank;
    }

    getRank(): number {
        return this._rank;
    }

    setRank(value: number) {
        this._rank = value;
    }
}